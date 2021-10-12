import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';
import strokeSvg from '../../../../../assets/stroke.svg';
import strokeXsSvg from '../../../../../assets/stroke.xs.svg';

export const Background = styled.footer`
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.footerBackground};

  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;

  width: 100%;
  height: 100%;
  min-height: 30rem;

  @media only screen and (min-width: 992px) {
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
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-evenly;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  display: grid;
  position: relative;

  @media only screen and (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  &::before {
    content: '';
    display: block;
    background-image: url(${strokeSvg});
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;
    width: 14rem;
    height: 27rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  @media only screen and (max-width: 768px) {
    &::before {
      background-image: url(${strokeXsSvg});
      width: 21rem;
      height: 24rem;
    }
  }
`;

export const FirstArticle = styled.article`
  grid-area: 1 / 1 / 2 / 2;
  position: relative;
  z-index: 6;

  h1 {
    font-weight: bold;
    font-size: 5rem;
  }

  h2 {
    font-weight: normal;
    font-size: 4rem;
  }

  @media only screen and (max-width: 992px) {
    grid-area: 1 / 1 / 2 / 3;

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const SecondArticle = styled.article`
  grid-area: 2 / 1 / 3 / 2;
  position: relative;
  z-index: 6;

  nav {
    display: flex;
    justify-content: start;
    ul {
      list-style-type: none;
      li {
        margin-bottom: 1.2rem;
        a {
          text-decoration: none;
          font-weight: normal;
          font-size: 2.5rem;
          color: ${(props: ThemeProps<colorsParams>) => props.theme.footerText};
          position: relative;
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    grid-area: 2 / 2 / 3 / 3;

    nav {
      display: flex;
      justify-content: end;
      ul {
        li {
          a {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;

export const FourthArticle = styled.article`
  grid-area: 1 / 3 / 2 / 4;
  align-self: center;
  position: relative;
  z-index: 6;

  h3 {
    font-size: 3.5rem;
    font-weight: bold;
  }

  @media only screen and (max-width: 992px) {
    grid-area: 2 / 1 / 3 / 2;

    display: none;
  }
`;

export const FifthArticle = styled.article`
  grid-area: 2 / 3 / 3 / 4;
  position: relative;
  z-index: 6;

  li {
    list-style-type: none;
    display: flex;
    align-items: baseline;
    margin-bottom: 1.6rem;

    .FaPhone {
      width: 2rem;
      height: 2rem;
    }

    .FaBuilding {
      width: 2rem;
      height: 2rem;
    }

    p {
      margin-left: 1.6rem;
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 992px) {
    grid-area: 2 / 1 / 3 / 2;

    ul {
      li {
        align-items: center;
        justify-content: flex-start;
        p {
          font-size: 1.2rem;
          text-align: left;
        }
      }
    }
  }
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 6;

  p {
    color: ${(props: ThemeProps<colorsParams>) => props.theme.footerText};
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
