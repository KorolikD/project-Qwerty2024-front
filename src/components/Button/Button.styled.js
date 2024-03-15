import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ $size }) => ($size === 'large' ? '136px' : '115px')};
  background-color: ${(props) =>
    props.$type === 'filled' ? props.theme.colors.primary : 'transparent'};
  border: ${(props) =>
    props.$type === 'transparent'
      ? `1px solid ${props.theme.colors.primary}`
      : 'none'};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({ disabled, theme }) =>
    disabled ? 'rgba(239, 237, 232, 0.6)' : theme.colors.white};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  transition: ${(props) =>
      props.$type === 'transparent' ? 'border' : 'background-color'}
    350ms ease;
  &:hover {
    ${(props) => {
      if (props.$type === 'filled') {
        return `background-color: ${props.theme.colors.secondary};`;
      }
      return `border: 1px solid rgba(239, 237, 232, 0.3)`;
    }}
  }
`;
