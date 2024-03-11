import { StyledButton } from './AuthButton.styled';

const Button = ({ children, variant = 'filled', size = 'signup' }) => {
  return (
    <StyledButton $size={size} $type={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
