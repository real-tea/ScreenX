import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/Header";
import Parent from "../components/Parent";
import Toolbar from '../components/Toolbar/Toolbar';

import { useState } from 'react';

export default function Home() {

  const [img , setImg] = useState();

  const onImageChange = (e) => {
    if(e.target.files.length!==0){
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }  
  }

  return (
    <>
      <Head>
        <title>ScreenX - Beautiful Screenshots</title>
        <link rel="icon" href="/logo.png"/>
        <meta name="title" content="Screen-X : screenshots made simple♥️"/>
        <meta name = "description" content = "Screen-X makes aesthetic and beautiful screenshot"/>
      </Head>

      <main className="min-h-[100vh]">
        <Header/>
        <Parent img =  {img}/>
        <Toolbar onImageChange= {onImageChange} img={img}/>
      </main>
      
    </>
  )
}
