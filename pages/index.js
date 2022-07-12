import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/Home.module.css';
import { Container, Content, Menu, MenuButton } from '../styles/home';
import PdfCard from '../components/PdfCard';
import Droppable from '../components/Droppable';
import GetFile from '../components/GetFile';
import PdfContext from '../contexts/PdfContext';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { MdAdd } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { RemoveFile } from '../services/pdf';


export default function Home() {
  const { FileList, setFileList, GetFileInfo } = useContext(PdfContext);

  function List() {
    return (
      <>
        {FileList.map((data, index) => {
          return <PdfCard onRemove={(deleteID) => setFileList(FileList.filter(item => item.id != deleteID))} numPages={data.numberOfPages} key={data.id} id={data.id} index={index}>
            <Image src={data.base64} layout='fill' objectFit='contain' unoptimized={true} />
          </PdfCard>
        })}
      </>
    )
  }

  return (
    <Container>
      <Content active={!!FileList.length > 0}>
        <Droppable items={FileList} setItems={(data) => setFileList(data)}>
          {
            FileList.length > 0
              ? <List />
              : <GetFile />
          }
        </Droppable>
      </Content>
      <Menu active={!!FileList.length > 0}>
        <MenuButton style={{ width: 50, height: 50 }}>
          <MdAdd htmlFor="file" style={{ fontSize: 26, color: 'white' }} />
          <input style={{ display: 'none' }} onChange={(data) => GetFileInfo(data)} type="file" id="file" name="file" accept={"application/pdf"} multiple />
        </MenuButton>
        <MenuButton>
          <IoCheckmarkDoneSharp style={{ fontSize: 20, color: 'white' }} />
        </MenuButton>
        <MenuButton style={{ width: 50, height: 50 }} onClick={() => setFileList([])}>
          <FaTrash style={{ fontSize: 18, color: 'white' }} />
        </MenuButton>
      </Menu>
    </Container>
  )
}
