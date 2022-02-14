/* eslint-disable no-param-reassign */
import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultTheme } from 'styled-components';

import Projects, { IProject } from '../components/Projects';
import Header from '../components/Header';
import HeroHeader from '../components/HeroHeader';
import SectionsContainer from '../components/SectionsContainer';
import HowToJoin from '../components/HowToJoin';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { Container } from '../styles/pages/Home';

import projectList from '../../projects.json';
import randomProjects from '../util/randomProjects';

interface IndexProps {
  setTheme(theme: DefaultTheme): void;
  projects: IProject[];
}

interface IStaticProps {
  props: {
    projects: IProject[];
  };
  revalidate: number;
}

const Index: NextPage<IndexProps> = ({ setTheme, projects }) => (
  <>
    <Head>
      <title>IFPE Open Source</title>
    </Head>
    <Container>
      <Header setTheme={setTheme} isHomePage />
      <HeroHeader />
      <SectionsContainer>
        <Projects projects={projects} />
        <HowToJoin />
        <WhoWeAre />
        <Contact />
      </SectionsContainer>
      <Footer />
    </Container>
  </>
);

export function getStaticProps(): IStaticProps {
  const projects = randomProjects(projectList);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Index;
