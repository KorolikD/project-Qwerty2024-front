import styled from 'styled-components';
import { Input as AntInput, Button as AntButton } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

export const Input = styled(AntInput)`
  width: 335px;
  height: 46px;
  padding: 14px;
  margin: 18px 0 0 0;

  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.formBorder};

  &::placeholder {
    font-weight: 400px;
    font-size: 14px;
    width: 100px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.grey};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      width: 100px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    padding: 14px;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white} !important;
    background: transparent !important;
    border-color: ${(props) => props.theme.colors.lightSecondary};
  }
`;

export const InputPassword = styled(AntInput.Password)`
  width: 335px;
  height: 46px;
  padding: 14px;
  margin: 18px 0 0 0;

  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.formBorder};

  &::placeholder {
    font-weight: 400px;
    font-size: 14px;
    width: 100px;
    line-height: 18px;
    color: ${(props) => props.theme.colors.grey};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      width: 100px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    padding: 14px;
  }

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white} !important;
    background: transparent !important;
    border-color: ${(props) => props.theme.colors.lightSecondary};
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

  &:not(:disabled):not(.ant-btn-disabled):hover {
    color: ${(props) => props.theme.colors.white} !important;
    background: ${(props) => props.theme.colors.lightSecondary} !important;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;

    padding: 16px 60px 16px 60px;
    border-radius: 12px;
    gap: 10px;
    margin-top: 64px;

    font-size: 20px;

    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    width: 190px;
    height: 56px;

    padding: 16px 60px;
    border-radius: 12px;
    gap: 10px;
  }
`;

export const Link = styled(RouterLink)`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 12px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;

  @media screen and (min-width: 576px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;

export const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;

  margin-top: 12px;
  color: ${(props) => props.theme.colors.grey};

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 18px;

    text-align: center;
  }
`;
