import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 58px;
  width: 335px;
  height: 368px;

  @media screen and (min-width: 768px) {
    width: 496px;
    height: 336px;

    margin-top: 108px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
    margin-top: 119px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.formBorder};
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  margin-top: 14px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
