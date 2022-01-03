import { NextPage } from 'next';
import Head from 'next/head';

import { Title } from '../components/title/index';

const MainPage: NextPage = (): JSX.Element => {
  const a = 1;
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Title/>
      <p>{a}</p>
    </>
  );
};

export default MainPage;
