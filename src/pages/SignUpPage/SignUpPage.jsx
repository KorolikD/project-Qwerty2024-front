import { FormContainer, Title, Paragraph } from './SignUpPage.styled.js';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import ResponsiveBackground from 'src/components/ResponsiveBackground/ResponsiveBackground.jsx';
import DynamicBox from '../../components/FloatingBoxes/DynamicElementBoxes.jsx';

const SignUpPage = () => {
  return (
    <>
      <FormContainer>
        <Title>Sign Up</Title>
        <Paragraph>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </Paragraph>
        <AuthForm type="SignUp" />
      </FormContainer>
      <DynamicBox type="videoTutorial"></DynamicBox>
      <DynamicBox type="calories"></DynamicBox>
      <ResponsiveBackground />
    </>
  );
};

export default SignUpPage;
