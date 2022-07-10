import { createContext, useState } from 'react';
import { pdfjs } from 'react-pdf';
import { formatBytes, ArrayId } from '../services/tools';

const PdfContext = createContext({ PdfInfo: null });

export function PdfProvider({ children }) {
    const [data, setData] = useState([])

    //Get file info from input.
    async function GetFileInfo(file) {

        const files = file.target.files

        for (let i = 0; i < files.length; i++) {

            //Check if it's a pdf.
            if (files[i].type != "application/pdf") {
                return;
            }

            //Get file url.
            const url = URL.createObjectURL(files[i])

            //Get number of pages of file.
            const NumOfPages = await pdfjs.getDocument(url).promise.then(function (doc) {
                var numPages = doc.numPages;
                return numPages;
            })

            //Set and update data
            setData(oldArray => [...oldArray, {
                id: ArrayId(),
                name: files[i].name,
                size: formatBytes(files[i].size),
                numberOfPages: NumOfPages,
                file: url
            }])
        }
    }

    return (
        <PdfContext.Provider value={{ data, GetFileInfo, setData }}>
            {children}
        </PdfContext.Provider>
    )
}

export default PdfContext;