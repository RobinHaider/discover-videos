import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/banner'
import Navbar from '../components/nav/navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta
          name='description'
          content='Discover youtube videos a netflix clone'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar/>
      <Banner
        videoId='4zH5iYM4wJo'
        title='Clifford the red dog'
        subTitle='a very cute dog'
        imgUrl='/static/clifford.webp'
      />
    </div>
  );
}
