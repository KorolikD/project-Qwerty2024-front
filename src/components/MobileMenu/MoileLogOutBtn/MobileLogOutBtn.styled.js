import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  background-color: transparent;
    @media screen and (min-width: 768px) {
        left: 32px;
        bottom: 32px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: #efede8;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
