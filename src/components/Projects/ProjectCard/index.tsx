/* eslint-disable object-curly-newline */
import Link from 'next/link';

import ProjectTech from './ProjectTech';
import { Container, ProjectImage, ProjectTechs, ProjectTitle } from './styles';

interface ProjectCardProps {
  projectURL: string;
  imageURL: string;
  title: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectURL,
  imageURL,
  title,
  techs,
}) => (
  <Link href={projectURL} passHref>
    <Container type="button">
      <ProjectImage src={imageURL} alt={title} width="500" height="281" />
      <div>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectTechs>
          {techs.map((tech) => (
            <ProjectTech
              techName={tech}
              key={techs.findIndex((element) => element === tech)}
            />
          ))}
        </ProjectTechs>
      </div>
    </Container>
  </Link>
);

export default ProjectCard;
