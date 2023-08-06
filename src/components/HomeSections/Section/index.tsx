import { Container, Content } from './styles';

interface SectionProps {
  accent?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, accent }) => (
  <Container $accent={accent}>
    <Content>{children}</Content>
  </Container>
);

export default Section;
