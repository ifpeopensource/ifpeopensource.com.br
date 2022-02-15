import Section from '../Section';
import { Description, Title } from '../../../styles/sections';

import { Container, Button } from './styles';

const HowToJoin: React.FC = () => (
  <Section>
    <Title>Como participar?</Title>
    <Container>
      <div>
        <Description style={{ marginBottom: '10px' }}>
          Você é um estudante do IFPE? Entre em contato conosco!
        </Description>
        <Description>
          Não estuda no IFPE? Ficaríamos felizes em contar com sua contribuição
          nos projetos!
        </Description>
      </div>
      <Button href="mailto:contato@ifpeopensource.com.br?subject=Interesse em participar da comunidade!">
        Vem com a gente!
      </Button>
    </Container>
  </Section>
);

export default HowToJoin;
