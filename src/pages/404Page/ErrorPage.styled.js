import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: bottom;

  @media (min-width: 768px) {
    padding-top: 300px;
  }

  @media (min-width: 1024px) {
    padding-top: 500px;
  }
`;

export const InfoContainer = styled.div`
  font: roboto;
  width: 240px;
  min-height: 812px;
  background-color: #e6533c;
  color: #efede8;
  padding: 20px 24px;

  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (min-width: 768px) {
    padding-top: 300px;
  }

  @media (min-width: 1024px) {
    padding-top: 500px;
  }
`;

export const Title = styled.h1`
  font-size: 66px;
  font-weight: 500;

  letter-spacing: 0.01em;
  margin: 0px 213px 0px 0px;

  padding: 0;

  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const Paragraph = styled.p`
  


  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
 

  width: 200px
height: 162px


  @media (min-width: 768px) {
    font-size: 48px; 

  @media (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const Button = styled.button`

padding: 12px 40px;
font-size: 16px;
font-weight: 500;


text-align: justify;

color: rgba(239, 237, 232, 1);

background-color: transparent;
border: 1px solid rgba(239, 237, 232, 0.3);
width: 160px;
height: 45px;
border-radius: 12px;

gap: 10px;

@media (min-width: 768px) {
  font-size: 48px; 

@media (min-width: 1024px) {
  font-size: 72px; 
}
`;

export const Logo = styled.div`
background-image: url('../../img/sprite.svg#icon-logo-mob');
width; 126px;
height: 13px;

`;
