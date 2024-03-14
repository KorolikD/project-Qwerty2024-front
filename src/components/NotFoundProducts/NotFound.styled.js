import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textWhite30};
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 580px;
    padding-top: 104px;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const AccentMessage = styled.p`
  padding-top: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
