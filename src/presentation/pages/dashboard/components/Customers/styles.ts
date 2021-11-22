import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';
import doubleQuotesIcon from '../../../../../assets/double-quotes.svg';

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 5rem 0 8rem;
`;

export const Content = styled.div`
  & > h1 {
    font-size: 6rem;
    font-weight: 500;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.agenciesTitleColor};
    text-align: left;
    margin-bottom: 14rem;
    @media only screen and (max-width: 426px) {
      font-size: 3.5rem;
      margin-bottom: 10rem;
    }
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 426px) {
    flex-direction: column;
    align-items: center;
    gap: 6rem;
  }
`;

export const Card = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 31%;
  min-height: 28rem;
  border: 0.1rem solid
    ${(props: ThemeProps<colorsParams>) => props.theme.customersCardBorderColor};
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.customersCardBackground};
  border-radius: 5px;
  position: relative;

  &::before {
    content: '';
    background-image: url(${doubleQuotesIcon});
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 8rem;
    height: 6rem;
    top: -4rem;
    bottom: 0;
    left: -0.5rem;
  }

  p {
    font-weight: 200;
    font-size: 2rem;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.customersCardDescriptionColor};
  }

  span {
    font-weight: 400;
    font-size: 2.5rem;
    text-align: right;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.customersCardSpanColor};
  }

  @media only screen and (max-width: 426px) {
    width: 100%;
  }
`;
