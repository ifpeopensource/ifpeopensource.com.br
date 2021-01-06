import { createGlobalStyle, DefaultTheme } from 'styled-components';

interface IThemeProps extends DefaultTheme {
  theme: {
    body: string;
  };
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: IThemeProps) => theme.body};
  }
`;
