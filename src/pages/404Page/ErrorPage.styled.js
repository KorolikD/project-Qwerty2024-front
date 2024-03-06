import styled from '@emotion/styled';
import backgroundImage from '../../img/exercises-side-1x.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
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
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (min-width: 768px) {
    width: 420px;
    min-height: 1024px;
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
width: 155px;
height: 45px;
border-radius: 12px;

gap: 10px;

@media (min-width: 768px) {
  font-size: 48px; 

@media (min-width: 1024px) {
  font-size: 72px; 
}
`;

export const LogoWrapper = styled.div`
  width: 130px;
  height: 13px;
  margin-bottom: 213px;
 
  
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) {
    font-size: 48px; 
  
  @media (min-width: 1024px) {
    font-size: 72px; 
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;

  position: absolute;
  width: 446px;
  height: 669px;
  top: 240px;
  left: 110px;
  bottom: 0;
  right: 0;

  @media (min-width: 768px) {
    font-size: 48px; 
  
  @media (min-width: 1024px) {
    font-size: 72px; 
  }
`;
