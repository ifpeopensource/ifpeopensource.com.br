import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';

import '../styles/modalAnimation.css';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [theme, setTheme] = useState(darkTheme);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Head>
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

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G8P48ED1PV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-G8P48ED1PV');
            `}
        </Script>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
