import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.mainFont};
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.4;
  }
`;
