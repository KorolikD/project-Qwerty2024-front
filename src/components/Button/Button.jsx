import { StyledButton } from './Button.styled';

const Button = ({ children, variant = 'filled', size = 'large'}) => {
  return (
    <StyledButton $size={size} $type={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
