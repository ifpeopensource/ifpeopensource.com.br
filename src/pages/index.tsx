/* eslint-disable no-param-reassign */
import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultTheme } from 'styled-components';
import { Collection, Documents, query as q } from 'faunadb';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects, { IProject } from '../components/HomeSections/Projects';
import Members, { IMember } from '../components/HomeSections/Members';
import HeroHeader from '../components/HomeSections/HeroHeader';
import SectionsContainer from '../components/HomeSections/SectionsContainer';
import HowToJoin from '../components/HomeSections/HowToJoin';
import WhoWeAre from '../components/HomeSections/WhoWeAre';
import Contact from '../components/HomeSections/Contact';

import { fauna } from '../services/fauna';
import ghApi from '../services/api';

import { Container } from '../styles/pages/Home';

import getRandomArrayItems from '../util/getRandomArrayItems';
import randomProjects from '../util/randomProjects';

import projectList from '../../projects.json';

interface IndexProps {
  setTheme(theme: DefaultTheme): void;
  projects: IProject[];
  members: IMember[];
}

interface IStaticProps {
  props: {
    projects: IProject[];
    members: IMember[];
  };
  revalidate: number;
}

const Index: NextPage<IndexProps> = ({ setTheme, projects, members }) => (
  <>
    <Head>
      <title>IFPE Open Source</title>
    </Head>
    <Container>
      <Header setTheme={setTheme} isHomePage />
      <HeroHeader />
      <SectionsContainer>
        <Projects projects={projects} />
        <Members members={members} />
        <HowToJoin />
        <WhoWeAre />
        <Contact />
      </SectionsContainer>
      <Footer />
    </Container>
  </>
);

interface FaunaQuery {
  data: Array<{ gh_id: string; user_teams: string[] }>;
}

export async function getStaticProps(): Promise<IStaticProps> {
  const projects = randomProjects(projectList);

  let members = [];
  try {
    let { data: faunaMembers }: FaunaQuery = await fauna.query(
      q.Map(
        q.Paginate(Documents(Collection('members'))),
        q.Lambda((member) => q.Select(['data'], q.Get(member)))
      )
    );

    faunaMembers = getRandomArrayItems(faunaMembers, 3);

    for (let faunaMember of faunaMembers) {
      const { data } = await ghApi.get(`/user/${faunaMember.gh_id}`);

      members.push({
        avatarUrl: data.avatar_url,
        name: data.name,
        ghUsername: data.login,
        teams: faunaMember.user_teams,
      });
    }
  } catch (error) {
    throw error;
  }

  return {
    props: {
      projects,
      members,
    },
    revalidate: 60,
  };
}

export default Index;
