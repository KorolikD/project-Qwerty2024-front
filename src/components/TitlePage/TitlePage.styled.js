import styled from 'styled-components';

export const TitleWrapper = styled.div`
    @media screen and (max-width: 375px) {

  }
    @media screen and (min-width: 768px) {
    
  }
    @media screen and (min-width: 1440px) {
  
  }
`;

export const Title = styled.h1`
    margin-top: 40px;
    margin-left: 20px;
    margin-bottom: 40px;
    font-family: ${({ theme }) => theme.fonts.mainFont};
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.2;
  @media screen and (max-width: 375px) {

  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1440px) {
  
  }
`;

