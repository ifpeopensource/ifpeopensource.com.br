/* eslint-disable no-param-reassign */
import { DefaultTheme } from 'styled-components';

import Header from '../components/Header';
import HeroHeader from '../components/HeroHeader';
import SectionsContainer from '../components/SectionsContainer';
import Projects, { IProject } from '../components/Projects';
import HowToJoin from '../components/HowToJoin';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { Container } from '../styles/pages/Home';

import projectList from '../../projects.json';
import randomProjects from '../util/randomProjects';

interface HomeProps {
  setTheme(theme: DefaultTheme): void;
  projects: IProject[];
}
const Home: React.FC<HomeProps> = ({ setTheme, projects }) => {
  // Fallback se o getStaticProps não conseguir retornar os projetos
  if (!projects) {
    projects = randomProjects(projectList);
  }
  return (
    <Container>
      <Header setTheme={setTheme} />
      <HeroHeader />
      <SectionsContainer>
        <Projects projects={projects} />
        <HowToJoin />
        <WhoWeAre />
        <Contact />
      </SectionsContainer>
      <Footer />
    </Container>
  );
};
export default Home;
