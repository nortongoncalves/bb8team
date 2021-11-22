import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';

interface CardParams {
  colorIndex: number;
  borderColorIndex: number;
}

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 5rem 0;
`;

export const Content = styled.div`
  & > h1 {
    font-size: 8rem;
    font-weight: 500;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.agenciesTitleColor};
    text-align: center;
    margin-bottom: 6rem;
  }

  @media only screen and (max-width: 426px) {
    & > h1 {
      font-size: 4rem;
      text-align: right;
      margin-bottom: 6rem;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

export const Card = styled.div<CardParams>`
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31%;
  min-height: 38rem;
  border: 0.1rem solid
    ${(props: ThemeProps<colorsParams> & CardParams) =>
      props.theme.agenciesCardBorderColor[props.borderColorIndex]};
  border-radius: 5px;

  section {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    &:first-child {
      margin-bottom: 5rem;
    }
  }

  h1 {
    font-weight: 400;
    font-size: 4rem;
    color: ${(props: ThemeProps<colorsParams> & CardParams) =>
      props.theme.agenciesCardTitleColor[props.colorIndex]};
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.agenciesCardDescriptionColor};
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-weight: 400;
      font-size: 3rem;
      color: ${(props: ThemeProps<colorsParams> & CardParams) =>
        props.theme.agenciesCardTitleColor[props.colorIndex]};
    }

    img {
      width: 50px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 426px) {
    width: 100%;
    min-height: 35rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
