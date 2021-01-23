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
    <Description style={{ textIndent: '2.5rem', marginBottom: '0.5rem' }}>
      A nossa comunidade se organiza por meio de projetos. Não existe limite
      para a quantidade de projetos, já que qualquer pessoa pode iniciar um
      projeto se estiver comprometida com ele. Não tem nenhum problema se você
      não quer criar um projeto novo! Na verdade, a maioria das pessoas
      contribui esporadicamente em projetos que ela goste.
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
