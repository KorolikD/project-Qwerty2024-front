import styled from 'styled-components';
import { Radio as RadioAnt, Form, Input } from 'antd';

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

  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FieldItem = styled.div`
  width: calc(50% - 7px);
`;

export const NameEmailSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 14px;
    margin-right: auto;
  }
`;

export const NameEmailItem = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textWhite50};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledInputNameEmail = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

export const StyledInput = styled(Input)`
  max-width: 335px;
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`;

export const WrappInput = styled.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const WrappLevel = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Radio = styled(RadioAnt)`
  > span {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.2;
    @media screen and (max-width: 375px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
    }
  }
`;
