import { DefaultTheme } from 'styled-components';

import Header from '../components/Header';

import { Container, Content } from '../styles/pages/Member.ts';

interface MemberProps {
  setTheme(theme: DefaultTheme): void;
}

const Member: React.FC<MemberProps> = ({ setTheme }) => {
  return (
    <Container>
      <Header setTheme={setTheme} />
      <Content>
      <p>Para criar seu card de membro, faça login com seu GitHub</p>
        </Content>
    </Container>
  );
};

export default Member;
