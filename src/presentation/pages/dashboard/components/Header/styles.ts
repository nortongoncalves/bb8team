import styled, { ThemeProps } from 'styled-components';
import { colorsParams } from '../../../../styles/globals';

export const Background = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 5%);
  background-color: ${(props: ThemeProps<colorsParams>) =>
    props.theme.menuBackground};

  width: 100%;
  height: 100%;
  min-height: 8.1rem;
  position: relative;
  z-index: 6;

  @media only screen and (max-width: 768px) {
    min-height: 5.1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    color: ${(props: ThemeProps<colorsParams>) => props.theme.menuTitleColor};
  }
`;
