import { Container, Block, Title, StyledLink } from './SignUpPage.styled.js';

const SignUpPage = () => {
  return (
    <Container>
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SignUpPage;
