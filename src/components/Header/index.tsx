/* eslint-disable object-curly-newline */
import { useContext, useEffect, useState, RefObject } from 'react';
import ThemeToggler from 'react-toggle';
import { DefaultTheme, ThemeContext } from 'styled-components';

import { darkTheme, lightTheme } from '../../styles/theme';

import { Container, Content, Logo } from './styles';

interface HeaderProps {
  setTheme(theme: DefaultTheme): void;
  isHomePage?: boolean;
  ref?: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ setTheme, isHomePage }) => {
  const [actualTheme, setActualTheme] = useState(useContext(ThemeContext));
  const [pageTop, setPageTop] = useState(isHomePage);

  function changeTheme() {
    if (actualTheme === darkTheme) {
      setTheme(lightTheme);
      setActualTheme(lightTheme);
    } else {
      setTheme(darkTheme);
      setActualTheme(darkTheme);
    }
  }

  function handleScroll() {
    if (window.pageYOffset < 0.75 * window.innerHeight) {
      setPageTop(true);
    } else {
      setPageTop(false);
    }
  }

  useEffect(() => {
    if (isHomePage) {
      setPageTop(window.pageYOffset < 0.75 * window.innerHeight);
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Container
      style={{
        borderBottom: actualTheme === lightTheme ? '2px solid' : '0',
        borderBottomColor: actualTheme.detail,
      }}
      className={pageTop ? 'pageTop' : ''}
    >
      <Content className={pageTop ? 'pageTop' : ''}>
        {actualTheme === darkTheme ? (
          <Logo
            src="/assets/images/logo-light.svg"
            key={actualTheme.body}
            alt="IFPE Open Source"
            width={139}
            height={47}
            className={pageTop ? 'pageTop' : ''}
          />
        ) : (
          <Logo
            src="/assets/images/logo-dark.svg"
            key={actualTheme.body}
            alt="IFPE Open Source"
            width={139}
            height={47}
            className={pageTop ? 'pageTop' : ''}
          />
        )}
        <ThemeToggler
          defaultChecked
          onChange={changeTheme}
          icons={{
            checked: <span>🌜</span>,
            unchecked: <span>🌞</span>,
          }}
          aria-label="tema"
        />
      </Content>
    </Container>
  );
};

export default Header;
