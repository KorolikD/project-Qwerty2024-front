import styled from 'styled-components';
import { Input as AntInput, Button as AntButton } from 'antd';

export const Input = styled(AntInput)`
  width: 335px;
  height: 46px;
  padding: 14px 283px 14px 14px;
  margin: 18px 0 0 0;

  border-radius: 12px;
  gap: 10px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.formBorder};

  &::placeholder {
    font-weight: 400px;
    font-size: 14px;

    line-height: 18px;
    color: ${(props) => props.theme.colors.grey};
  }
`;

export const Button = styled(AntButton)`
 
  margin-top: 28px;
  width: 136px;
  height: 42px;
  padding: 12px 40px;
  border-radius: 12px;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.lightSecondary};
    color: ${(props) => props.theme.colors.white} 
    outline: none;
  }
`;
