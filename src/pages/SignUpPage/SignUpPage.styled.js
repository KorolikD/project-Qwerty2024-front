import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;

  @media screen and (max-width: 768px) {
    padding-top: 200px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 700px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  width: 335px;
  height: 368px;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 496px;
    height: 336px;
    top: 189px;
    left: 32px;
    gap: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;

  @media screen and (min-width: 576px) {
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
 
  margin-top: 12px;
  color: ${(props) => props.theme.colors.grey};

  @media screen and (min-width: 768px) {
    width: 176px
height: 18px


  }


`;

export const Link = styled.a`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 12px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;

  @media screen and (min-width: 576px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;
