import PdfCard from '../PdfCard';
import PdfViewer from '../PdfViewer';

export default function List({ data }) {
    return (
      <>
        {data.map((data, index) => {
          return <PdfCard numPages={data.numberOfPages} key={index} id={data.id} index={index}>
            <PdfViewer file={data.file} scale={.2} />
          </PdfCard>
        })}
      </>
    )
  }