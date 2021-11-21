import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-darkbg">
    <div className={styles.container} >
      <Head>
        <title>React in Production</title>
        <meta name="description" content="Learn how to create a React app that is ready for production" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-black text-white text-5xl center text-yellow">
          React in Production
        </h1>

        <p className={styles.description}> <span className="text-white">
          Take your React skills to the next level
          </span>        </p>

      </main>

      <footer className={styles.footer}>
        <div className="text-sm text-graytext">© 2021 Souvik Basu. All Rights Reserved.</div>
      </footer>
      </div>
    </div>
  )
}

export default Home
