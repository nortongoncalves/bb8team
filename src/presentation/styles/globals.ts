import { createGlobalStyle } from 'styled-components';

export interface colorsParams {
  background: string;
  title: string;
  footerBackground: string;
  footerText: string;
}

export interface themesParams {
  title: string;
  colors: colorsParams;
}

export default createGlobalStyle`
  body {
    margin: 0;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
