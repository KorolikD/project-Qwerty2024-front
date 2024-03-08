import styled from 'styled-components';

export const Burger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;
