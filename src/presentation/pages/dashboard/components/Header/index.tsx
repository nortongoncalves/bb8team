import React from 'react';
import { Container } from '../../styles';
import { Background, Content, TitleGroup } from './styles';
import { Nav } from './components/Nav';
import logoHomeSvg from '../../../../../assets/logo.home.svg';

export function Header(): JSX.Element {
  return (
    <Background>
      <Container>
        <Content>
          <TitleGroup>
            <img src={logoHomeSvg} alt="Logo" />
            <h1>BB8 Team</h1>
          </TitleGroup>
          <Nav />
        </Content>
      </Container>
    </Background>
  );
}
