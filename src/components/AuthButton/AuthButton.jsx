import { StyledButton } from './AuthButton.styled';

const Button = ({ children, variant = 'signup', size = 'signup' }) => {
  const url = variant === 'signup' ? '/signup' : '/signin';

  return (
    <StyledButton to={url} $size={size} $type={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
