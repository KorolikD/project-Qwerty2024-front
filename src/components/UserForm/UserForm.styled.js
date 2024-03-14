import styled from 'styled-components';
import { Radio as RadioAnt, Form, Input as InputAnt } from 'antd';
import Calendar from '../Calendar/index.js';

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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
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

  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const InputTextWrap = styled(Form.Item)`
  margin-bottom: 14px;
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

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`;

export const CalendarInputWrap = styled.div`
  position: relative;
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
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
  margin-bottom: 40px;
`;
