import Container from '../../components/Container/Container';
import {  FormContainer, Title , Paragraph } from './SignInPage.styled';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';
import ResponsiveBackground from '../../components/ResponsiveBackground.jsx';


const SignInPage = () => {

  return (
    
   <>
<FormContainer>
<Title>Sign In</Title>
<Paragraph>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</Paragraph>
<AuthForm type='SignIn'/>
 </FormContainer>
 <ResponsiveBackground/>

 </>
  
  );
};

export default SignInPage;
