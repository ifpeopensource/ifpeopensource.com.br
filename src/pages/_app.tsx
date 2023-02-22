import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getCookieConsentValue } from 'react-cookie-consent';
import { ThemeProvider } from 'styled-components';

import CookieConsent from '../components/CookieConsent';
import GTag from '../components/GTag';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';

import '../styles/modalAnimation.css';

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [theme, setTheme] = useState(darkTheme);
  const [isAnalyticsGranted, setIsAnalyticsGranted] = useState(false);

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      setIsAnalyticsGranted(true);
    }
  }, []);

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

        <CookieConsent
          onAccept={() => {
            setIsAnalyticsGranted(true);
          }}
          onDecline={() => {
            setIsAnalyticsGranted(false);
          }}
        />

        {isAnalyticsGranted && <GTag />}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
