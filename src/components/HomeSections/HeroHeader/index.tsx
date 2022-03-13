/* eslint-disable indent */
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// eslint-disable-next-line object-curly-newline
import { Button, Container, Content, Text } from './styles';

const HeroHeader: React.FC = () => {
  const actualTheme = useContext(ThemeContext);

  return (
    <Container theme={actualTheme}>
      <Content>
        <Text>
          Comunidade de tecnologia e computação do Instituto Federal de
          Pernambuco
        </Text>

        <Link href="https://github.com/ifpeopensource/" passHref>
          <Button>Veja no GitHub</Button>
        </Link>
      </Content>
    </Container>
  );
};

export default HeroHeader;
