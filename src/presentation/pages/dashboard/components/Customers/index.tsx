import React from 'react';
import { Container } from '../../styles';
import { Background, Card, CardGroup, Content } from './styles';

export function Customers(): JSX.Element {
  return (
    <Background>
      <Container>
        <Content>
          <h1>
            What our customers are <br /> saying...
          </h1>
          <CardGroup>
            <Card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ulla.
              </p>
              <span>Jonh Doe</span>
            </Card>
            <Card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ulla.
              </p>
              <span>Jonh Doe</span>
            </Card>
            <Card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ulla.
              </p>
              <span>Jonh Doe</span>
            </Card>
          </CardGroup>
        </Content>
      </Container>
    </Background>
  );
}
