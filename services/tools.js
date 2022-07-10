import { pdfjs } from 'react-pdf';

//Convert bytes to KB, MB, GB... 
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


//Create id from arrays.
export const ArrayId = () => {
    return Math.floor(Math.random() * 100)
}

//Get number of pages of file.

export const NumOfPages = async(url) => {
    const N = await pdfjs.getDocument(url).promise.then(function (doc) { return doc.numPages })

    return N;
}