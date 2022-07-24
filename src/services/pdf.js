import { pdfjs } from "react-pdf";
import jsPDF from "jspdf";
import PDFMerger from "pdf-merger-js/browser";
import { ArrayId, NumOfPages, formatBytes } from "./tools";

//Reading file to convert PDF to image.
const readFileData = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    };
    reader.onerror = (err) => {
      reject(err);
    };
    reader.readAsDataURL(file);
  });
};

//Converting PDF to base64 image.
export const convertPdfToImages = async (file) => {
  var image;
  const data = await readFileData(file);
  const pdf = await pdfjs.getDocument(data).promise;
  const canvas = document.createElement("canvas");
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1 });
  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  await page.render({ canvasContext: context, viewport: viewport }).promise;
  image = canvas.toDataURL();

  canvas.remove();
  return image;
};

export async function GetFileInfo(file) {
  const files = file.target.files;
  var FileList = [];

  for (let i = 0; i < files.length; i++) {
    //Check if it's a pdf.
    if (files[i].type != "application/pdf") {
      return;
    }

    const url = URL.createObjectURL(files[i]);
    const NumberOfPages = await NumOfPages(url);

    const base64 = await convertPdfToImages(files[i]);

    FileList.push({
      id: ArrayId(),
      name: files[i].name,
      size: formatBytes(files[i].size),
      numberOfPages: NumberOfPages,
      file: files[i],
      base64: base64,
    });
  }

  return FileList;
}

//Merge PDF
export const MergePDF = async (files) => {
  const merger = new PDFMerger();

  for (let i = 0; i < files.length; i++) {
    await merger.add(files[i].file);
  }

  const mergedPdf = await merger.saveAsBlob();
  const url = URL.createObjectURL(mergedPdf);

  return url;
};

//Generate infos from final file
export async function GenerateFinalFile(blob, fileName) {
  const GetBlob = await fetch(blob).then((r) => r.blob());

  const [numberOfPages, base64] = await Promise.all([
    NumOfPages(blob),
    convertPdfToImages(GetBlob),
  ]);

  const id = ArrayId();
  const name = fileName;
  const file = blob;
  const size = formatBytes(GetBlob.size);

  return {
    id,
    name,
    size,
    numberOfPages,
    file,
    base64,
  };
}

export const fileToImageURL = (file) => {
  return new Promise((resolve, reject) => {
    console.log("Function fileToImageURL executed!");

    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error("Failed to convert File to Image"));
    };

    image.src = URL.createObjectURL(file);
  });
};

const A4_PAPER_DIMENSIONS = {
  width: 210,
  height: 297,
};

const A4_PAPER_RATIO = A4_PAPER_DIMENSIONS.width / A4_PAPER_DIMENSIONS.height;

const imageDimensionsOnA4 = (dimensions) => {
  const isLandscapeImage = dimensions.width >= dimensions.height;

  // If the image is in landscape, the full width of A4 is used.
  if (isLandscapeImage) {
    return {
      width: A4_PAPER_DIMENSIONS.width,
      height:
        A4_PAPER_DIMENSIONS.width / (dimensions.width / dimensions.height),
    };
  }

  // If the image is in portrait and the full height of A4 would skew
  // the image ratio, we scale the image dimensions.
  const imageRatio = dimensions.width / dimensions.height;
  if (imageRatio > A4_PAPER_RATIO) {
    const imageScaleFactor =
      (A4_PAPER_RATIO * dimensions.height) / dimensions.width;

    const scaledImageHeight = A4_PAPER_DIMENSIONS.height * imageScaleFactor;

    return {
      height: scaledImageHeight,
      width: scaledImageHeight * imageRatio,
    };
  }

  // The full height of A4 can be used without skewing the image ratio.
  return {
    width: A4_PAPER_DIMENSIONS.height / (dimensions.height / dimensions.width),
    height: A4_PAPER_DIMENSIONS.height,
  };
};

export const generatePdfFromImages = async (images) => {
  // Default export is A4 paper, portrait, using millimeters for units.
  const doc = new jsPDF();

  // We let the images add all pages,
  // therefore the first default page can be removed.
  doc.deletePage(1);

  images.forEach((image) => {
    const imageDimensions = imageDimensionsOnA4({
      width: image.width,
      height: image.height,
    });

    doc.addPage();
    doc.addImage(
      image.src,
      image.imageType,
      // Images are vertically and horizontally centered on the page.
      (A4_PAPER_DIMENSIONS.width - imageDimensions.width) / 2,
      (A4_PAPER_DIMENSIONS.height - imageDimensions.height) / 2,
      imageDimensions.width,
      imageDimensions.height
    );
  });

  // Creates a PDF and opens it in a new browser tab.
  const pdfURL = doc.output("bloburl");
  return pdfURL;
};
