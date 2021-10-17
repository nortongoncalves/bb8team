import React from 'react';
import { FaChevronDown } from 'react-icons/fa/index';
import ilustrationSvg from '../../../../../assets/Ilustration.svg';
import { Container } from '../../styles';
import {
  Background,
  Content,
  Description,
  Title,
  Button,
  FirstArticle,
  Image,
} from './styles';

export function ApresentationContent(): JSX.Element {
  return (
    <Background>
      <Container>
        <Content>
          <header>
            <FirstArticle>
              <Title>
                Quality for <br /> Cheap.
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Description>
              <Button>Hire us</Button>
            </FirstArticle>
            <article>
              <Image src={ilustrationSvg} alt="ilustration" />
            </article>
          </header>
          <footer>
            <FaChevronDown />
          </footer>
        </Content>
      </Container>
    </Background>
  );
}
