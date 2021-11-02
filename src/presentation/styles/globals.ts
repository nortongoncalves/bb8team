import { createGlobalStyle, ThemeProps } from 'styled-components';

export interface colorsParams {
  background: string;
  title: string;
  menuBackground: string;
  menuTitleColor: string;
  menuTextColor: string;
  menuTouchOpacity: string;
  menuTouchOpacityTextColor: string;
  menuButtonBarsColor: string;
  apresentationContentBackground: string;
  apresentationContentTitle: string;
  apresentationContentDescribe: string;
  apresentationContentButtonBackground: string;
  apresentationContentButtonColor: string;
  apresentationContentIconColor: string;
  companiesBackgroundColor: string;
  companiesTitleColor: string;
  companiesTitleColorXs: string;
  companiesDescriptionColor: string;
  agenciesTitleColor: string;
  agenciesCardTitleColor: string[];
  agenciesCardDescriptionColor: string;
  agenciesCardBorderColor: string[];
  customersTitleColor: string;
  customersCardBackground: string;
  customersCardDescriptionColor: string;
  customersCardBorderColor: string;
  customersCardSpanColor: string;
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
    background-color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.background};
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

  body, button, input, textarea {
    font-size: clamp(14px, 1.6rem, 2vw);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
