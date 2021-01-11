import Link from 'next/link';
import Section from '../Section';
import { Title, Description } from '../../styles/sections';
import { ProjectList, ShowMoreButton } from './styles';
import ProjectCard from './ProjectCard';

interface IProject {
  title: string;
  projectURL: string;
  imageURL: string;
  techs: string[];
}

interface ProjectsProps {
  projects: [IProject, IProject, IProject];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Section>
    <Title>Projetos</Title>
    <Description>
      A nossa comunidade se organiza por meio de diversos projetos.
    </Description>
    <Description>
      Cada um deles possui um objetivo específico e usa tecnologias diferentes.
      Veja os projetos que a galera está desenvolvendo:
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
