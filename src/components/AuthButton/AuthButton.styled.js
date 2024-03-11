import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: ${({ $size }) => ($size === 'signup' ? '140px' : '135px')};
  background-color: ${(props) =>
    props.$type === 'signup' ? props.theme.colors.primary : 'transparent'};
  border: ${(props) =>
    props.$type === 'signup'
      ? `1px solid ${props.theme.colors.primary}`
      : `1px solid ${props.theme.colors.formBorder}`};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  transition: ${(props) =>
      props.$type === 'transparent' ? 'border' : 'background-color'}
    350ms ease;
  &:hover {
    ${(props) => {
      if (props.$type === 'signup') {
        return `background-color: ${props.theme.colors.secondary};`;
      }
      return `border: 1px solid rgba(239, 237, 232, 0.3)`;
    }}
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    width: ${({ $size }) => ($size === 'signup' ? '190px' : '182px')};

    font-size: 20px;

    line-height: 1.2;
    letter-spacing: 0em;
  }
`;
