import { Container, Title, StyledImage } from './WelcomePage.styled';
import example from '../../assets/example.png';

const WelcomePage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default WelcomePage;
