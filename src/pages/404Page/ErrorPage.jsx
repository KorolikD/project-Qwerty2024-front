import 'modern-normalize/modern-normalize.css';
import { Container, Title, Paragraph, InfoContainer } from './ErrorPage.styled.js';
import {HomeButton} from './HomeButton';

const ErrorPage = () => {
  return (
    <Container>
      <InfoContainer>
      <Title>404</Title>
      <Paragraph>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</Paragraph>
      <HomeButton/>
      </InfoContainer>

    </Container>
  );
};

export default ErrorPage;
