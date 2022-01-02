import { AppProps } from 'next/app';

import '../shared/styles/fonts.css';
import '../shared/styles/vars.css';
import '../shared/styles/normalize.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
