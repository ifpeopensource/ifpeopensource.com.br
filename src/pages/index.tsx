import Head from 'next/head';
import { DefaultTheme } from 'styled-components';

import Home from './Home';

interface IndexProps {
  setTheme(theme: DefaultTheme): void;
}

const Index: React.FC<IndexProps> = ({ setTheme }) => (
  <div>
    <Head>
      <title>IFPE Open Source</title>
    </Head>

    <Home setTheme={setTheme} />
  </div>
);

export default Index;
