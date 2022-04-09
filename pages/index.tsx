import type { NextPage } from 'next'
import Head from 'next/head'
import HomeBody from '../components/Home/HomeBody'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home |  PgmDictionary </title>
      </Head>
      <HomeBody />
    </>
  )
}

export default Home