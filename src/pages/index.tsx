/* eslint-disable camelcase */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { NextPage } from 'next';
import Head from 'next/head';
import { DefaultTheme } from 'styled-components';

import type { IProject } from '../components/Projects';

import Home from './Home';

import api from '../services/api';

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

interface IRepoRequest {
  name: string;
  html_url: string;
  full_name: string;
}
interface ITopicsRequest {
  names: string[];
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
  const repos: IRepoRequest[] = (
    await api.get('/orgs/ifpe-open-source/repos', {
      params: {
        sort: 'updated',
        per_page: 3,
      },
    })
  ).data;

  const projects = [];

  for (const repo of repos) {
    const topics: ITopicsRequest = (
      await api.get(`/repos/${repo.full_name}/topics`, {
        params: {
          per_page: 4,
        },
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json',
        },
      })
    ).data;

    projects.push({
      title: repo.name,
      projectURL: repo.html_url,
      imageURL: `https://raw.githubusercontent.com/${repo.full_name}/master/projectImage.jpg`,
      techs: topics.names,
    });
  }

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
}

export default Index;
