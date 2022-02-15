import { Container, Tech } from './styles';

interface ProjectTechProps {
  techName: string;
}

const ProjectTech: React.FC<ProjectTechProps> = ({ techName }) => (
  <Container>
    <Tech>{techName}</Tech>
  </Container>
);

export default ProjectTech;
