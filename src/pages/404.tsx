import Head from 'next/head';

import { Container, GoBackButton } from '../styles/pages/404';

const My404: React.FC = () => (
  <Container>
    <Head>
      <title>404 | Página não encontrada</title>
    </Head>

    <h1>404</h1>
    <p>Ops, esta página não foi encontrada</p>
    <GoBackButton href="/">Ir para página inicial</GoBackButton>
  </Container>
);

export default My404;
