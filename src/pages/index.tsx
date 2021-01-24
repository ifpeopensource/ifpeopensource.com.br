import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultTheme } from 'styled-components';

import type { IProject } from '../components/Projects';

import Home from './Home';

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
  <div>
    <Head>
      <title>IFPE Open Source</title>
    </Head>

    <Home setTheme={setTheme} projects={projects} />
  </div>
);

export async function getStaticProps(): Promise<IStaticProps> {
  const projects = randomProjects(projectList);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Index;
