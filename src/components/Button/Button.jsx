import { StyledButton } from './Button.styled';

const Button = ({ children, type = 'filled', size = 'large' }) => {
  return (
    <StyledButton $size={size} $type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
