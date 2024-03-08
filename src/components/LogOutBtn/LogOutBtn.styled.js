import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  margin-left: 16px;
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;
