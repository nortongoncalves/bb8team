import React from 'react';
import { Container } from '../../styles';
import { Background, ItemCarousel, Description, Title } from './styles';
import logoipsum1 from '../../../../../assets/logoipsum.svg';
import logoipsum2 from '../../../../../assets/logoipsum2.svg';
import logoipsum3 from '../../../../../assets/logoipsum3.svg';
import logoipsum4 from '../../../../../assets/logoipsum4.svg';
import logoipsum5 from '../../../../../assets/logoipsum5.svg';
import { Carousel } from '../../../../components/Carousel';

export function Companies(): JSX.Element {
  return (
    <Background>
      <Container>
        <Title>Companies that trust us</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
          tempor <br /> incidunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Description>
        <Carousel>
          <ItemCarousel src={logoipsum1} alt="item1" />
          <ItemCarousel src={logoipsum2} alt="item2" />
          <ItemCarousel src={logoipsum3} alt="item3" />
          <ItemCarousel src={logoipsum4} alt="item4" />
          <ItemCarousel src={logoipsum5} alt="item5" />
          <ItemCarousel src={logoipsum3} alt="item3" />
          <ItemCarousel src={logoipsum4} alt="item4" />
          <ItemCarousel src={logoipsum5} alt="item5" />
        </Carousel>
      </Container>
    </Background>
  );
}
