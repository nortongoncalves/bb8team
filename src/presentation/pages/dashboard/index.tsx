import React from 'react';
import { Container, Main } from './styles';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
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
