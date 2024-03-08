import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 5px;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`;
