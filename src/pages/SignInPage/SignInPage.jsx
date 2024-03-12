import { FormContainer, Title, Paragraph } from './SignInPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import ResponsiveBackground from 'src/components/ResponsiveBackground/ResponsiveBackground.jsx';
import DynamicBox from '../../components/FloatingBoxes/DynamicElementBoxes';

const SignInPage = () => {
  return (
    <>
      <FormContainer>
        <Title>Sign In</Title>
        <Paragraph>
          Welcome! Please enter your credentials to login to the platform:
        </Paragraph>
        <AuthForm type="SignIn" />
      </FormContainer>
      <ResponsiveBackground />
      <DynamicBox type="videoTutorial"></DynamicBox>
      <DynamicBox type="calories"></DynamicBox>
    </>
  );
};

export default SignInPage;
