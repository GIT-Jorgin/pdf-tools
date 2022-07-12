import { createContext, useState } from 'react';
import { convertPdfToImages } from '../services/pdf';
import { formatBytes, ArrayId, NumOfPages } from '../services/tools';

const PdfContext = createContext({ PdfInfo: null });

export function PdfProvider({ children }) {
    const [FileList, setFileList] = useState([])

    //Get file info from input.
    async function GetFileInfo(file) {

        const files = file.target.files

        for (let i = 0; i < files.length; i++) {

            //Check if it's a pdf.
            if (files[i].type != "application/pdf") {
                return;
            }

            const url = URL.createObjectURL(files[i])
            const NumberOfPages = await NumOfPages(url);

            const base64 = await convertPdfToImages(files[i])

            //Set and update data
            setFileList(oldArray => [...oldArray, {
                id: ArrayId(),
                name: files[i].name,
                size: formatBytes(files[i].size),
                numberOfPages: NumberOfPages,
                file: files[i],
                base64: base64
            }])
        }
    }

    return (
        <PdfContext.Provider value={{ FileList, GetFileInfo, setFileList }}>
            {children}
        </PdfContext.Provider>
    )
}

export default PdfContext;