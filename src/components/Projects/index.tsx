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
    <Description style={{ marginBottom: '0.5rem' }}>
      A comunidade se organiza por meio de projetos relacionados à programação,
      cultura maker, entre outros. Você pode ver e baixar e contribuir para os
      projetos livremente, mas se quiser, também pode criar um novo.
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
