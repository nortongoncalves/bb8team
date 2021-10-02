import React from 'react';
import { Container, Header, Main } from './styles';
import { Footer } from './components/Footer';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header>
        <Container>
          <h2>Header</h2>
        </Container>
      </Header>
      <Main>
        <Container>
          <h1>Main</h1>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export { Dashboard };
