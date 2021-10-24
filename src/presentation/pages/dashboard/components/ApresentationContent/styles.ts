import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.apresentationContentBackground};

  @media only screen and (max-width: 425px) {
    margin: 0.2rem 0;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: calc(100vh - 8rem);

  header {
    display: flex;
    flex-direction: row;
    gap: 30rem;

    @media only screen and (max-width: 1024px) {
      gap: 10rem;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 3.5rem;
      color: ${(props: ThemeProps<colorsParams>) =>
        props.theme.apresentationContentIconColor};
    }
  }
`;

export const FirstArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const SecondArticle = styled.article`
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 10rem;
  font-weight: 500;
  overflow-wrap: break-word;
  color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.apresentationContentTitle};

  @media only screen and (max-width: 768px) {
    font-size: 5.5rem;
  }
`;

export const Description = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.apresentationContentDescribe};

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.apresentationContentButtonColor};
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.apresentationContentButtonBackground};

  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem;
  width: 32%;
  margin-top: 15px;

  @media only screen and (max-width: 1024px) {
    width: 45%;
  }

  @media only screen and (max-width: 768px) {
    width: 65%;
  }

  @media only screen and (max-width: 425px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  max-width: 38.6rem;

  @media only screen and (max-width: 1024px) {
    max-width: 30rem;
  }

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
