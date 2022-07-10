import { useState } from "react";
import { Container } from "./styles";
import { Document, Page } from 'react-pdf';

export default function PdfViewer({ scale, file, page, numberOfPages }) {
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(data) {
        console.log(data)
    }

    return (
        <Container>
            <Document renderMode={'svg'} file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page width={165} pageNumber={pageNumber} />
            </Document>
        </Container>
    )
}