import styled from 'styled-components';
import theme from '../../styles/theme';
import { Field } from 'formik';

export const AddProductModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 413px;
  }
`;
export const AddProductInputWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProductInput = styled(Field)`
  width: 287px;
  height: 34px;
  padding: 8px 14px;

  border-radius: 12px;
  color: ${(props) => props.theme.colors.textWhite30};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 52px;
    padding: 14px;
  }
`;

export const CaloriesWrapper = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textWhite40};
`;
export const Calories = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.white};
`;
export const WeightInputWrapper = styled.div`
  position: relative;
  &::after {
    content: 'grams';
    position: absolute;
    top: 8px;
    right: 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: ${(props) => props.theme.colors.textWhite40};
    display: block;

    @media screen and (min-width: 768px) {
      top: 16px;
    }
  }
`;
export const WeightInput = styled(Field)`
  width: 287px;
  height: 34px;
  padding: 8px 14px;

  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 52px;
    padding: 14px;
  }
`;

export const AddProductBtnWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    gap: 16px;
  }
`;

export const AddProductSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;

  background-color: ${theme.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;

export const AddProductCancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 121px;
  height: 42px;
  padding: 12px 12px;

  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${theme.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 142px;

    height: 52px;
  }
`;
