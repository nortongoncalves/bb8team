import React from 'react';
import { Main } from './styles';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ApresentationContent } from './components/ApresentationContent';
import { Companies } from './components/Companies';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <ApresentationContent />
        <Companies />
      </Main>
      <Footer />
    </>
  );
}

export { Dashboard };
