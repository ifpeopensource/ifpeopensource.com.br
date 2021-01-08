import { useContext, useState } from 'react';
import ThemeToggler from 'react-toggle';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { darkTheme, lightTheme } from '../../styles/theme';

import { Container, Content, Logo } from './styles';

interface HeaderProps {
  setTheme(theme: DefaultTheme): void;
}

const Header: React.FC<HeaderProps> = ({ setTheme }) => {
  const [actualTheme, setActualTheme] = useState(useContext(ThemeContext));

  function changeTheme() {
    if (actualTheme === darkTheme) {
      setTheme(lightTheme);
      setActualTheme(lightTheme);
    } else {
      setTheme(darkTheme);
      setActualTheme(darkTheme);
    }
  }

  return (
    <Container
      style={{
        borderBottom: actualTheme === lightTheme ? '2px solid' : '0',
        borderBottomColor: actualTheme.detail,
      }}
    >
      <Content>
        {actualTheme === darkTheme ? (
          <Logo
            src="/assets/images/logo-light.svg"
            key={actualTheme.body}
            width={139}
            height={47}
          />
        ) : (
          <Logo
            src="/assets/images/logo-dark.svg"
            key={actualTheme.body}
            width={139}
            height={47}
          />
        )}
        <ThemeToggler
          defaultChecked
          onChange={changeTheme}
          icons={{
            checked: <span>🌜</span>,
            unchecked: <span>🌞</span>,
          }}
        />
      </Content>
    </Container>
  );
};

export default Header;
