import { useState, useEffect, useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css';
import { Container, Content } from '../styles/home';
import Droppable from '../components/Droppable';
import GetFile from '../components/GetFile';
import PdfContext from '../contexts/PdfContext';
import List from '../components/List';


export default function Home() {
  const { data, setData } = useContext(PdfContext);

  return (
    <Container>
      <Content>
        <Droppable items={data} setItems={(data) => setData(data)}>
          {
            data.length > 0
              ? <List data={data} />
              : <GetFile />
          }
        </Droppable>
      </Content>
    </Container>
  )
}
