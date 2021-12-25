import React from 'react';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { FaBuilding } from '@react-icons/all-files/fa/FaBuilding';
import {
  Main,
  Background,
  FirstSection,
  SecondSection,
  FirstArticle,
  FourthArticle,
  SecondArticle,
  FifthArticle,
} from './styles';
import { Container } from '../../styles';

export function Footer(): JSX.Element {
  return (
    <Background>
      <Container>
        <Main>
          <FirstSection>
            <FirstArticle>
              <h2>BB8 Team</h2>
              <h3>Quality for cheap</h3>
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
            <FourthArticle>
              <h4>Get in touch</h4>
            </FourthArticle>
            <FifthArticle>
              <ul>
                <li className="phone-info">
                  <FaPhone className="FaPhone" />
                  <p>209-296-5917</p>
                </li>
                <li className="build-info">
                  <FaBuilding className="FaBuilding" />
                  <p>
                    2184 Freedom Lane,
                    <br /> Pine Grove United States
                  </p>
                </li>
              </ul>
            </FifthArticle>
          </FirstSection>
          <SecondSection>
            <p>© 2021 BB8 Team. All rights reserved.</p>
          </SecondSection>
        </Main>
      </Container>
    </Background>
  );
}
