import { DefaultTheme } from 'styled-components';

import Header from '../../components/Header';
import HeroHeader from '../../components/HeroHeader';

import { Container } from './styles';

interface HomeProps {
  setTheme(theme: DefaultTheme): void;
}

const Home: React.FC<HomeProps> = ({ setTheme }) => (
  <Container>
    <Header setTheme={setTheme} />
    <HeroHeader />
  </Container>
);

export default Home;
