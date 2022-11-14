import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from "../components/Header";

export default function Home() {
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
      </main>
    </>
  )
}
