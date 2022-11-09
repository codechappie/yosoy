import Head from 'next/head';
import { Layout } from '../components/Layout';
import style from '../styles/Home.module.scss'
export default function Home() {


  return (
    <Layout>
      <Head>
        <title>YosoY - Inicio</title>
        <meta name="description" content="YoSoY es una página en la que podrás crear una curriculim online." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className={style.re}>Hola</h2>
      </main>

    </Layout>
  )
}
