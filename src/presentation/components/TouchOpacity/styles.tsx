import styled from 'styled-components';

interface ButtonParams {
  backgroundColor: string;
  color: string;
  width: number;
  height: number;
}

export const Button = styled.button<ButtonParams>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: ${props => `${props.width}rem`};
  height: ${props => `${props.height}rem`};
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 500;
  opacity: 1;
  transition: opacity 0.2s ease-out;

  &:active {
    opacity: 0.6;
  }
`;
