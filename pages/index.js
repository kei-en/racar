import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>racar</title>
        <meta name="description" content="P2P car sharing platform" />
        <link rel="icon" href="/fav.svg" />
      </Head>

      <Header /> 
      <Banner /> 
    </div>
  )
}
