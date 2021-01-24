import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';

import '../styles/modalAnimation.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.header}
        />
        <meta name="msapplication-TileColor" content={theme.header} />
        {theme === darkTheme ? (
          <meta name="color-scheme" content="dark" />
        ) : (
          <meta name="color-scheme" content="light" />
        )}
        <meta name="theme-color" content={theme.header} />
      </Head>
      <Component {...pageProps} setTheme={setTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
