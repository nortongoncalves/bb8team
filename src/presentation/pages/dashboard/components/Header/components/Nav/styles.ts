import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../../../styles/globals';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: normal;
    color: ${(props: ThemeProps<colorsParams>) => props.theme.menuTextColor};
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: transparent;

  svg {
    font-size: 2rem;
    color: ${(props: ThemeProps<colorsParams>) =>
      props.theme.menuButtonBarsColor};
    outline: none;
  }

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
