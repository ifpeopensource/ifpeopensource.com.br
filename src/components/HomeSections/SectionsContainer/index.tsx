import { Container } from './styles';

interface SectionsContainerProps {
  children: React.ReactNode;
}

const SectionsContainer: React.FC<SectionsContainerProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default SectionsContainer;
