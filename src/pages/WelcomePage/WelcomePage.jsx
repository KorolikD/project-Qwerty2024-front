import {
  Title,
  MainContainer,
  ButtonContainer,
  FloatingCircle,
} from './WelcomePage.styled.js';
import AuthButton from '../../components/AuthButton/AuthButton';

import ResponsiveBackground from '../../components/ResponsiveBackground/ResponsiveBackground.jsx';
import DynamicBox from '../../components/FloatingBoxes/DynamicElementBoxes.jsx';
const WelcomePage = () => {
  return (
    <>
      <MainContainer>
        <FloatingCircle>
          <use href="src/img/sprite.svg#icon-circle"></use>
        </FloatingCircle>
        <Title>Transforming your body shape with Power Pulse</Title>
        <ButtonContainer>
          <AuthButton size="signup" variant="signup">
            Sign Up
          </AuthButton>
          <AuthButton size="signin" variant="">
            Sign In
          </AuthButton>
        </ButtonContainer>
      </MainContainer>
      <ResponsiveBackground />
      <DynamicBox type="videoTutorial"></DynamicBox>
      <DynamicBox type="calories"></DynamicBox>
    </>
  );
};

export default WelcomePage;
