import styled from 'styled-components';

export const MainContainer = styled.div`
  text-align: left;

  padding-top: 66px;

  @media screen and (min-width: 768px) {
    width: 598px;
    height: 234px;

    padding-top: 157px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 200px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.1;
    letter-spacing: 0.01em;
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const Span = styled.span`
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 52px;
  gap: 14px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const FloatingCircle = styled.svg`
  fill: transparent;
  position: absolute;
  z-index: -1;
  width: 98px;
  height: 35px;
  top: 5px;
  left: -8px;
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
  }
  @media screen and (min-width: 1024px) {
    width: 185px;
    height: 67px;
  }
`;
