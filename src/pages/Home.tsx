import { DefaultTheme } from 'styled-components';

import Header from '../components/Header';

import HeroHeader from '../components/HeroHeader';

import SectionsContainer from '../components/SectionsContainer';
import Projects from '../components/Projects';
import HowToJoin from '../components/HowToJoin';

import { Container } from '../styles/pages/Home';

interface HomeProps {
  setTheme(theme: DefaultTheme): void;
}

const Home: React.FC<HomeProps> = ({ setTheme }) => (
  <Container>
    <Header setTheme={setTheme} />
    <HeroHeader />
    <SectionsContainer>
      <Projects
        projects={[
          {
            title: 'Website',
            projectURL: 'https://github.com/ifpe-open-source/website',
            imageURL:
              'https://images.unsplash.com/photo-1610062070518-55e6a3d3a290',
            techs: ['Next.js', 'ReactJS', 'Typescript'],
          },
          {
            title: 'Website',
            projectURL: 'https://github.com/ifpe-open-source/website',
            imageURL:
              'https://images.unsplash.com/photo-1610062070518-55e6a3d3a290',
            techs: ['Next.js', 'ReactJS', 'Typescript'],
          },
          {
            title: 'Website',
            projectURL: 'https://github.com/ifpe-open-source/website',
            imageURL:
              'https://images.unsplash.com/photo-1610062070518-55e6a3d3a290',
            techs: ['Next.js', 'ReactJS', 'Typescript'],
          },
        ]}
      />
      <HowToJoin />
    </SectionsContainer>
  </Container>
);

export default Home;
