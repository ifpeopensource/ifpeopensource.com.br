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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis,
          elit facilisis sapien, fermentum, ornare porta.{' '}
        </Text>

        <Link href="https://github.com/ifpe-open-source/" passHref>
          <Button>Veja no GitHub</Button>
        </Link>
      </Content>
    </Container>
  );
};

export default HeroHeader;
