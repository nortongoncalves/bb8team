import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';

export const Background = styled.footer`
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.footerBackground};

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;
  min-height: 4.1rem;

  @media only screen and (min-width: 768px) {
    min-height: 36.1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;

  color: ${(props: ThemeProps<colorsParams>) => props.theme.footerText};
`;

export const FirstSection = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-evenly;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export const FirstArticle = styled.article`
  grid-area: 1 / 1 / 2 / 2;

  h1 {
    font-weight: bold;
    font-size: 5rem;
  }

  h2 {
    font-weight: normal;
    font-size: 4rem;
  }
`;

export const SecondArticle = styled.article`
  grid-area: 2 / 1 / 3 / 2;
  nav ul {
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        font-weight: normal;
        font-size: 2.5rem;
        color: ${(props: ThemeProps<colorsParams>) => props.theme.footerText};
      }
    }
  }
`;

export const ThirdArticle = styled.article`
  grid-area: 1 / 2 / 3 / 3;
`;

export const FourthArticle = styled.article`
  grid-area: 1 / 3 / 3 / 4;
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    color: ${(props: ThemeProps<colorsParams>) => props.theme.footerText};
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
