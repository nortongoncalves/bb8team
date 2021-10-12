import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    max-width: 90%;
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 540px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 720px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    max-width: 960px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    max-width: 1140px;
  }

  @media only screen and (min-width: 1400px) {
    max-width: 1320px;
  }
`;
