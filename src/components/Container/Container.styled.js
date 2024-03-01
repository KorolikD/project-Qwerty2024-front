import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 5px;
  margin: 0 auto;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  width: 325px;
  @media screen and (min-width: 768px) {
    width: 685px;
    padding: 0 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1230px;
  }
`;
