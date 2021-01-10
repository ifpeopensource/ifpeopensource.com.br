import { Container, Content } from './styles';

interface SectionProps {
  accent?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, accent }) => (
  <Container accent={accent}>
    <Content>{children}</Content>
  </Container>
);

export default Section;
