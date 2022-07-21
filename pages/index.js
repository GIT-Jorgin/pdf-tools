import { useState, useEffect } from "react"
import Head from "next/head"
import { Button, Container } from "../styles/home"

export default function App(){

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }, []);

    return(
        <Container>
            <Head>
                <title>PDF tools</title>
            </Head>
            <Button href="/mergepdf" color="#fff" bg="#FF3333">Mesclar PDFs</Button>
            <Button href="/imagetopdf" color="#fff" bg="#33C4FF">Converter imagens para PDF</Button>
        </Container>
    )
}