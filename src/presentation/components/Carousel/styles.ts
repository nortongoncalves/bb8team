import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  overflow: hidden;
  overflow-x: scroll;
  margin-bottom: 4rem;

  /*
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
  */
`;
