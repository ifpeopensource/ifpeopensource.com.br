import { DefaultTheme } from 'styled-components';

import Header from '../components/Header';
import HeroHeader from '../components/HeroHeader';
import Projects from '../components/Projects';
import SectionsContainer from '../components/SectionsContainer';

import { Container } from '../styles/pages/Home';

interface HomeProps {
  setTheme(theme: DefaultTheme): void;
}

const Home: React.FC<HomeProps> = ({ setTheme }) => (
  <Container>
    <Header setTheme={setTheme} />
    <HeroHeader />
    <SectionsContainer>
      <Projects />
    </SectionsContainer>
  </Container>
);

export default Home;
