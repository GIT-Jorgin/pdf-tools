import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Document, Page, pdfjs } from 'react-pdf';

export default function PdfViewer({ scale, file, page, numberOfPages }) {
    const [pageNumber, setPageNumber] = useState(1);
    const [image, setImage] = useState()

    useEffect(() => {

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
    
        const convertPdfToImages = async (file) => {
            const images = [];
            const data = await readFileData(file);
            const pdf = await pdfjs.getDocument(data).promise;
            const canvas = document.createElement("canvas");
            for (let i = 0; i < pdf.numPages; i++) {
              const page = await pdf.getPage(i + 1);
              const viewport = page.getViewport({ scale: 1 });
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              await page.render({ canvasContext: context, viewport: viewport }).promise;
              images.push(canvas.toDataURL());
            }
            canvas.remove();
            return images;
          }

          convertPdfToImages(file).then((data) => {
            setImage(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [file])

    return (
        <Container>
            <img src={image} style={{transform: 'scale(.2)'}} />
        </Container>
    )
}