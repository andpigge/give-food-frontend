import { AppProps } from 'next/app';
import Head from 'next/head';

import '../shared/styles/index.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Дари Еду</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
