import React from 'react';
import { Main } from './styles';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ApresentationContent } from './components/ApresentationContent';
import { Companies } from './components/Companies';
import { Agencies } from './components/Agencies/indext';
import { Customers } from './components/Customers';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <ApresentationContent />
        <Companies />
        <Agencies />
        <Customers />
      </Main>
      <Footer />
    </>
  );
}

export { Dashboard };
