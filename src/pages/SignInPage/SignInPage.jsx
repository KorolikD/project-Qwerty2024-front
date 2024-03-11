import Container from '../../components/Container/Container';
import { FormContainer, Title, Paragraph } from './SignInPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import ResponsiveBackground from '../../components/ResponsiveBackground.jsx';
import DynamicBox from '../../components/FloatingBoxes/DynamicElementBoxes';

const SignInPage = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default SignInPage;
