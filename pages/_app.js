import '../styles/main.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SpaceX Launch Programs</title>
  </Head>
  <Component {...pageProps} /></>
}

export default App
