import React from 'react';
import { Container } from './styles';

export interface CarouselProps {
  children: JSX.Element | JSX.Element[];
}

export function Carousel({ children }: CarouselProps): JSX.Element {
  return <Container>{children}</Container>;
}
