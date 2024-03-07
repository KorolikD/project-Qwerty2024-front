import styled from '@emotion/styled';
import backgroundImage from '../../img/side-view-people-training-gym-1.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  // width: 100%;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    // padding-top: 500px;
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
    padding: 32px;
  }

  @media (min-width: 1024px) {
    width: 669px;
    min-height: 800px;
    padding: 32px 96px;
  }
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 66px;
  font-weight: 500;

  letter-spacing: 0.01em;

  margin-top: 213px;

  @media (min-width: 768px) {
    font-size: 160px;
  }

  @media (min-width: 1024px) {
    // font-size: 72px;
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
    font-size: 16px; 
    margin-top: 28px;
    margin-bottom: 28px;

  @media (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const Button = styled.button`

padding: 12px 40px;
font-size: 16px;
font-weight: 500;


text-align: center;

color: rgba(239, 237, 232, 1);

background-color: transparent;
border: 1px solid rgba(239, 237, 232, 0.3);
width: 155px;
height: 45px;
border-radius: 12px;

gap: 10px;

@media (min-width: 768px) {
  font-size: 20px; 
  width: 208px;
height: 56px;
padding: 16px 60px;

@media (min-width: 1024px) {
  font-size: 20px; 
  width: 208px;
height: 56px;
padding: 16px 60px;
}
`;

export const LogoWrapper = styled.div`
  width: 130px;
  height: 13px;
  margin-bottom: 213px;
 
  
  display: flex;
  flex-direction: row;

  @media (min-width: 768px) {
    // font-size: 48px; 
  
  @media (min-width: 1024px) {
    font-size: 72px; 
  }
`;

export const BackgroundImage = styled.div`
  background:
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    linear-gradient(170.48deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    url(${backgroundImage}) no-repeat;
  background-size: cover;

  position: absolute;
  width: 446px;
  height: 669px;
  top: 240px;
  left: 110px;
  bottom: 0;
  right: 0;

  @media (min-width: 768px) {
    width: 670px;
    height: 1005px;
    top: 131px;
    left: 331px;
  }

  @media (min-width: 1024px) {
    width: 670px;
    height: 1005px;
    top: -152px;
    left: 770px;
  }
`;
