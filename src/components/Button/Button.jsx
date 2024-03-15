import { StyledButton } from './Button.styled';

const Button = ({
  children,
  $size = 'large',
  $isDisabled,
  $typeBtn,
  $type,
}) => {
  return (
    <StyledButton
      $size={$size}
      $type={$type}
      disabled={$isDisabled}
      type={$typeBtn}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
