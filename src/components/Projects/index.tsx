import Link from 'next/link';
import Section from '../Section';
import { Title, Description } from '../../styles/sections';
import { ProjectList, ShowMoreButton } from './styles';
import ProjectCard from './ProjectCard';

export interface IProject {
  title: string;
  projectURL: string;
  imageURL: string;
  techs: string[];
}

interface ProjectsProps {
  projects: IProject[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Section>
    <Title>Projetos</Title>
    <Description style={{ textIndent: '2.5rem', marginBottom: '0.5rem' }}>
      A comunidade se organiza por meio de projetos relacionados à programação,
      cultura maker, entre outros. Você pode ver, utilizar e contribuir para os
      projetos livremente, como também pode criar um novo e contribuir ainda mais para o projeto.
    </Description>
    <Description style={{ textIndent: '2.5rem' }}>
      Veja alguns dos projetos que a comunidade desenvolve atualmente:
    </Description>
    <ProjectList>
      {projects.slice(0, 3).map((project) => (
        <ProjectCard
          title={project.title}
          projectURL={project.projectURL}
          imageURL={project.imageURL}
          techs={project.techs}
          key={project.projectURL}
        />
      ))}
    </ProjectList>
    <Link href="https://github.com/ifpe-open-source" passHref>
      <ShowMoreButton>Ver mais</ShowMoreButton>
    </Link>
  </Section>
);

export default Projects;
