import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  padding: 40px 0;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding: 72px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 96px;
    padding: 0;
    position: relative;
    &::before {
      content: 'Filters';
      color: ${({ theme }) => theme.colors.textWhite50};
      font-size: 14px;
      position: absolute;
      top: -50%;
      left: 94%;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 12px;

  &:focus:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 1000;
`;
export const SvgSearch = styled.svg`
  fill: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`;

export const ClearButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const SvgCross = styled.svg`
  stroke: ${({ theme }) => theme.colors.primary};
`;

export const CategorySelect = styled.select`
  display: flex;
  gap: 10px;
  width: 146px;
  padding: 14px;
  font-size: 14px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 12px;
  &:focus:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    width: 192px;
    font-size: 16px;
  }
`;

export const RecommendationSelect = styled.select`
  width: 173px;
  padding: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.formBorder};
  border-radius: 12px;
  &:focus:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (min-width: 768px) {
    width: 204px;
    font-size: 16px;
  }
`;

export const Option = styled.option`
  appearance: none;
  user-select: none;
  text-indent: -9999px;

  background-color: ${({ theme }) => theme.colors.graphite};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.mainFont};
  text-transform: capitalize;
  &:focus:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
