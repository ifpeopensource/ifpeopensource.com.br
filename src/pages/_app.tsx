import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
