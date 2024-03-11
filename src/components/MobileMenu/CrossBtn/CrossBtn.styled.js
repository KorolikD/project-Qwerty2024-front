import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 19px;
  right: 20px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
    width: 32px;
    height: 32px;
  }
`;
