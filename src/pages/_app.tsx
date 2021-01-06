import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme } from '../styles/theme';
import 'tailwindcss/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={darkTheme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
