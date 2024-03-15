import {
  Title,
  MainContainer,
  ButtonContainer,
  FloatingCircle,
  Span,
} from './WelcomePage.styled.js';
import AuthButton from '../../components/AuthButton/AuthButton';

import ResponsiveBackground from '../../components/ResponsiveBackground/ResponsiveBackground.jsx';
import DynamicBox from '../../components/FloatingBoxes/DynamicElementBoxes.jsx';
import sprite from '../../img/sprite.svg';

const WelcomePage = () => {
  return (
    <>
      <MainContainer>
        <Title>
          Transforming your{' '}
          <Span>
            body
            <FloatingCircle>
              <use href={`${sprite}#icon-circle`}></use>
            </FloatingCircle>
          </Span>{' '}
          shape with Power Pulse
        </Title>
        <ButtonContainer>
          <AuthButton size="signup" variant="signup">
            Sign Up
          </AuthButton>
          <AuthButton size="signin" variant="">
            Sign In
          </AuthButton>
        </ButtonContainer>
      </MainContainer>
      <ResponsiveBackground>
        <DynamicBox type="videoTutorial"></DynamicBox>
        <DynamicBox type="calories"></DynamicBox>
      </ResponsiveBackground>
    </>
  );
};

export default WelcomePage;
