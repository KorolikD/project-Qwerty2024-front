import 'modern-normalize/modern-normalize.css';
import {  Title, Paragraph, InfoContainer, Button} from './ErrorPage.styled.js';
import Logo404 from '../../components/Logo/404Logo.jsx';
import ResponsiveBackground from './ResponsiveBackground';
import Container from '../../components/Container/Container.jsx';

import backgroundImageHero1x from '../../img/hero-1x.jpg';
import backgroundImageHero2x from '../../img/hero-2x.jpg';
import backgroundImageHeroMob2x from '../../img/hero-mob-2x.jpg';
import backgroundImageHeroMob1x from '../../img/hero-mob-1x.jpg';
import backgroundImageHeroTab2x from '../../img/hero-tab-2x.jpg';
import backgroundImageHeroTab1x from '../../img/hero-tab-1x.jpg';


const ErrorPage = () => {

  const images = {
    desktop: backgroundImageHero1x,
    desktop2x: backgroundImageHero2x,
    tablet: backgroundImageHeroTab1x,
    tablet2x: backgroundImageHeroTab2x,
    mobile: backgroundImageHeroMob1x,
    mobile2x: backgroundImageHeroMob2x,
  };

  return (
    <Container>
 
      <InfoContainer>
      <Logo404/>
     <Title>404</Title>
      <Paragraph>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</Paragraph>
      <Button to='/'>Go Home</Button>
      </InfoContainer>
      <ResponsiveBackground images={images} />
      
    

    </Container>
  );
};

export default ErrorPage;
