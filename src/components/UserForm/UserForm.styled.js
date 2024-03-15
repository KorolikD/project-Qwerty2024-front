import styled from 'styled-components';
import { Radio as RadioAnt, Form, Input as InputAnt } from 'antd';

export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 42px;

  margin-bottom: 44px;

  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({ disabled, theme }) =>
    disabled ? 'rgba(239, 237, 232, 0.6)' : theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  transition: background-color 350ms ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    width: 144px;
    height: 56px;
    font-size: 20px;
    padding: 16px 50px;
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const CalendarWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Icon = styled.div`
  position: absolute;
  top: 17px;
  right: 14px;
`;

export const WrapActivity = styled(Form.Item)`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
export const InputsText = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 14px;
    margin-bottom: 14px;
  }
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    margin-top: 5px;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 14px;
  margin-bottom: 20px;
  .ant-form-item {
    input {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const InputTextWrap = styled(Form.Item)`
  width: 100%;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const InputNumberWrap = styled(Form.Item)`
  margin: 0;
`;

export const Input = styled(InputAnt)`
  width: 100%;
  padding: 14px;
  line-height: 1.3;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CalendarInputWrap = styled.div`
  position: relative;
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item:nth-child(2) {
    display: flex;
    align-items: end;
  }
`;
export const Radio = styled(RadioAnt)``;

export const RadioGroupGap8 = styled(RadioAnt.Group)`
  display: flex;
  gap: 8px;
`;
export const RadioGroupLevelActivity = styled(RadioAnt.Group)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }
`;
