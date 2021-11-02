import React from 'react';

import { Background, Card, Content, CardGroup } from './styles';
import { Container } from '../../styles';
import writingIcon from '../../../../../assets/writing.svg';
import graphicIcon from '../../../../../assets/graphic.svg';
import developmentIcon from '../../../../../assets/development.svg';

export function Agencies(): JSX.Element {
  return (
    <Background>
      <Container>
        <Content>
          <h1>More than an agency.</h1>
          <CardGroup>
            <Card colorIndex={0} borderColorIndex={0}>
              <section>
                <h1>Writing</h1>
                <img src={writingIcon} alt="Writing Icon" />
              </section>
              <section>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
              </section>
            </Card>
            <Card colorIndex={1} borderColorIndex={1}>
              <section>
                <h1>
                  Graphic <br /> Design
                </h1>
                <img src={graphicIcon} alt="Graphic Icon" />
              </section>
              <section>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
              </section>
            </Card>
            <Card colorIndex={2} borderColorIndex={2}>
              <section>
                <h1>
                  Software <br /> Development
                </h1>
                <img src={developmentIcon} alt="Development Icon" />
              </section>
              <section>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam,
                </p>
              </section>
            </Card>
          </CardGroup>
        </Content>
      </Container>
    </Background>
  );
}
