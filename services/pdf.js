import { pdfjs } from 'react-pdf';
import PDFMerger from 'pdf-merger-js/browser';
import { ArrayId, NumOfPages, formatBytes } from './tools';

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
}

export async function GetFileInfo(file) {

    const files = file.target.files
    var FileList = []

    for (let i = 0; i < files.length; i++) {

        //Check if it's a pdf.
        if (files[i].type != "application/pdf") {
            return;
        }

        const url = URL.createObjectURL(files[i])
        const NumberOfPages = await NumOfPages(url);

        const base64 = await convertPdfToImages(files[i])


        FileList.push({
            id: ArrayId(),
            name: files[i].name,
            size: formatBytes(files[i].size),
            numberOfPages: NumberOfPages,
            file: files[i],
            base64: base64
        })
    }

    return FileList;
}

//Merge PDF
export const MergePDF = async (files) => {
    const merger = new PDFMerger();

    for (let i = 0; i < files.length; i++) {
        await merger.add(files[i].file)
    }

    const mergedPdf = await merger.saveAsBlob();
    const url = URL.createObjectURL(mergedPdf);

    return url;
}

//Generate infos from final file
export async function GenerateFinalFile(blob, fileName) {
    const GetBlob = await fetch(blob).then(r => r.blob());

    const [numberOfPages, base64] = await Promise.all([
        NumOfPages(blob), convertPdfToImages(GetBlob)
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
        base64
    }

}