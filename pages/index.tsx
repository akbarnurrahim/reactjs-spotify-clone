import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidabar from '../components/Sidabar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Reactjs Spotify Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Sidabar/>

        {/* {Side bar} */}
        {/* {center} */}
      </main>

      <div>
        {/* player   */}
      </div>     
    </div>
  )
}

export default Home
