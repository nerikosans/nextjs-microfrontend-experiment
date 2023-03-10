import Head from 'next/head';
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic';

// const App2Message = (await import('app2/app2Message')).App2Message;

const App2Message = dynamic(() => import('next2/app2Message'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <p>Hello from app 1!</p>
        <App2Message />
      </main>
    </>
  );
}
