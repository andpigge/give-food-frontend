import { NextPage } from 'next';
import Head from 'next/head';

import { Title } from '../components/title/index';

const MainPage: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Title/>
    </>
  );
};

export default MainPage;
