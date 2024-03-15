import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }
`;
export const Wrap = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 27px;
  }
`;
