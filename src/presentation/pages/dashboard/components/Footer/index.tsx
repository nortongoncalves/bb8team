import React from 'react';
import {
  Main,
  Background,
  FirstSection,
  SecondSection,
  FirstArticle,
  FourthArticle,
  SecondArticle,
  ThirdArticle,
} from './styles';
import { Container } from '../../styles';

export function Footer(): JSX.Element {
  return (
    <Background>
      <Container>
        <Main>
          <FirstSection>
            <FirstArticle>
              <h1>BB8 Team</h1>
              <h2>Quality for cheap</h2>
            </FirstArticle>
            <SecondArticle>
              <nav>
                <ul>
                  <li>
                    <a href="/">Back to the top</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                  <li>
                    <a href="/">Register</a>
                  </li>
                </ul>
              </nav>
            </SecondArticle>
            <ThirdArticle>
              <img src="" alt="" />
            </ThirdArticle>
            <FourthArticle>
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <img src="" alt="" />
                  <p>209-296-5917</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>2184 Freedom Lane, Pine Grove United States</p>
                </li>
              </ul>
            </FourthArticle>
          </FirstSection>
          <SecondSection>
            <p>© 2021 BB8 Team. All rights reserved.</p>
          </SecondSection>
        </Main>
      </Container>
    </Background>
  );
}
