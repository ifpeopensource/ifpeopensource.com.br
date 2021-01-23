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
          Disseminando a cultura{' '}
          <span style={{ whiteSpace: 'nowrap' }}>open source</span> no Instituto
          Federal de Pernambuco.
        </Text>

        <Link href="https://github.com/ifpe-open-source/" passHref>
          <Button>Veja no GitHub</Button>
        </Link>
      </Content>
    </Container>
  );
};

export default HeroHeader;
