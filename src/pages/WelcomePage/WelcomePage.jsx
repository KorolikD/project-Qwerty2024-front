import { Container, Title, StyledImage } from './WelcomePage.styled.js';
import example from '../../assets/example.png';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <Container>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="signin">LogIn</Link>
        <Link to="signup">Register</Link>
      </div>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default WelcomePage;
