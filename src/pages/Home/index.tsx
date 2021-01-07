import { DefaultTheme } from 'styled-components';

import Header from '../../components/Header';

import { Container } from './styles';

interface HomeProps {
  setTheme(theme: DefaultTheme): void;
}

const Home: React.FC<HomeProps> = ({ setTheme }) => (
  <Container>
    <Header setTheme={setTheme} />
  </Container>
);

export default Home;
