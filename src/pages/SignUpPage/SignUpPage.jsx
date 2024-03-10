
import {  FormContainer, Title , Paragraph} from './SignUpPage.styled.js';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import ResponsiveBackground from '../../components/ResponsiveBackground.jsx';


const SignUpPage = () => {

  return (
    <>
<FormContainer>
<Title>Sign Up</Title>
<Paragraph>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</Paragraph>
<AuthForm type='SignUp'/>

      </FormContainer>

      <ResponsiveBackground/>
    </>
  
  );
};

export default SignUpPage;
