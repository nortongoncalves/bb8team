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
    props.theme.companiesBackgroundColor};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  min-height: 45rem;
  justify-content: space-evenly;
  flex-direction: column;

  @media only screen and (max-width: 425px) {
    min-height: 35rem;
  }
`;

export const Title = styled.h1`
  font-size: 6rem;
  text-align: center;
  font-weight: 600;
  color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.companiesTitleColor};

  @media only screen and (max-width: 425px) {
    font-size: 3rem;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.companiesTitleColorXs};
  }
`;

export const Description = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.companiesDescriptionColor};

  @media only screen and (max-width: 425px) {
    font-size: 1.5rem;
  }
`;

export const ItemCarousel = styled.img`
  max-width: 25rem;
`;
