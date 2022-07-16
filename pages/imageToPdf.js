import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/Home.module.css';
import { Container, Content, FileArea, FileInputLabel, Menu, MenuButton, PdfResultSize, Result, Title } from '../styles/home';
import DroppableArea from '../components/DroppableArea';
import GetFile from '../components/GetFile';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { fileToImageURL, generatePdfFromImages, GenerateFinalFile } from '../services/pdf';
import { TbDownload } from 'react-icons/tb';
import fileDownload from 'js-file-download';
import { PaperCard, PaperCardDraggable } from '../components/PaperCard';
import { SimpleSpinner } from '../components/Loaders';
import { ArrayId } from '../services/tools';

export default function Home() {
  const [FileList, setFileList] = useState([]);
  const [finalFile, setFinalFile] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [])

  console.log(FileList);

  //Get and organize files
  async function handle_Files(data) {
    setLoading(true);
    const files = data.target.files

    async function blobToBase64(blob) {
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    }

    for (let i = 0; i < files.length; i++) {
      const blob = await fileToImageURL(files[i]);
      const DownloadBlob = await fetch(blob.src).then(r => r.blob());
      const base64 = await blobToBase64(DownloadBlob);

      setFileList(oldFiles => [...oldFiles, {
        id: ArrayId(),
        file: blob,
        base64: base64
      }])
    }
    setLoading(false);
   //console.log(generatePdfFromImages(images));
  }

  //Make pdf merged
  async function handle_PDF() {

    if (finalFile) {
      const DownloadBlob = await fetch(finalFile.file).then(r => r.blob());
      fileDownload(DownloadBlob, finalFile.name);
    } else {
      var images = []

      for (let i = 0; i < FileList.length; i++) {
        images.push(FileList[i].file)
      }

      setLoading(true);
      const Blob = await generatePdfFromImages(images);
      const file = await GenerateFinalFile(Blob, 'ImagesToPDF.pdf').then((data) => {
        setLoading(false);
        return data
      });

      setFinalFile(file)
    }
  }

  function List() {
    return (
      <>
        {FileList.map((data, index) => {
          return <PaperCardDraggable deletable disabled={loading} onRemove={(deleteID) => setFileList(FileList.filter(item => item.id != deleteID))} numPages={0} key={data.id} id={data.id} index={index}>
            <div style={{ borderRadius: 5, width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
              <Image src={data.base64} objectFit='contain' layout='fill' unoptimized={true} />
            </div>
          </PaperCardDraggable>
        })}
      </>
    )
  }

  return (
    <Container>
      <Title style={{color: '#62A9F5'}}>Converter imagens para <font color='#fff' style={{ backgroundColor: '#62A9F5', padding: '2px 5px', borderRadius: 4 }}>PDF</font></Title>
      <FileArea>
        <Content finalFile={!!finalFile} active={!!FileList.length > 0}>
          <DroppableArea items={FileList} sortItems={(data) => setFileList(data)}>
            {
              !finalFile ? (
                FileList.length > 0
                  ? <List />
                  : loading ? <p>CARREGANDO...</p> :<GetFile style={{backgroundColor: 'rgba(98, 169, 245, .2)', color: '#62A9F5'}} accept={"image/jpeg, image/png"} files={(data) => handle_Files(data)} />
              ) : (
                <Result>
                  <p>{finalFile.name}</p>
                  <PaperCard numPages={finalFile.numberOfPages}>
                    <Image src={finalFile.base64} objectFit={'contain'} layout='fill' unoptimized={true} />
                  </PaperCard>
                  <PdfResultSize>{finalFile.size}</PdfResultSize>
                </Result>
              )
            }
          </DroppableArea>
        </Content>
        <Menu active={!!FileList.length > 0}>
          <MenuButton disabled={loading || finalFile}>
            <MdAdd fontSize='26' color='#fff' />
            <FileInputLabel disabled={loading || finalFile} htmlFor='file' />
            <input disabled={loading || finalFile} style={{ display: 'none' }} onChange={(data) => handle_Files(data)} type="file" id="file" name="file" accept={"image/jpeg, image/png"} multiple />
          </MenuButton>
          <MenuButton disabled={loading} onClick={() => handle_PDF()}>
            {finalFile ? <TbDownload fontSize='26' color='#fff' /> :loading ? <SimpleSpinner scale={.4} /> : <IoCheckmarkDoneSharp fontSize='20' color='#fff' />}
          </MenuButton>
          <MenuButton disabled={loading} onClick={() => {setFinalFile(); setFileList([])}}>
            <FaTrash fontSize='18' color='#fff' />
          </MenuButton>
        </Menu>
      </FileArea>
    </Container>
  )
}
