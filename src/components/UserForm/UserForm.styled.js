import styled from 'styled-components';
import { Radio as RadioAnt, Form } from 'antd';

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

export const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textWhite50};
  line-height: 1.5;
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
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

export const StyledInput = styled.input`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px 224px 14px 14px;
  width: 335px;
  height: 46px;
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

// background-color: transparent;
