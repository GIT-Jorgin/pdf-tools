import { useState } from "react";
import { Container } from "./styles";
import { Document, Page } from 'react-pdf';

export default function PdfViewer({ scale, file, page, numberOfPages }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        numberOfPages && numberOfPages(numPages);
    }

    return (
        <Container scale={scale}>
            <Document renderMode={'svg'} file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
        </Container>
    )
}