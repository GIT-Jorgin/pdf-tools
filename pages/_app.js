import '../styles/globals.css';
import { pdfjs } from 'react-pdf';
import { PdfProvider } from '../contexts/PdfContext';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function MyApp({ Component, pageProps }) {
  return (
    <PdfProvider>
      <Component {...pageProps} />
    </PdfProvider>
  )
}

export default MyApp
