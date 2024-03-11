import styled from 'styled-components';

export const Topper = styled.header`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  padding: ${({ $isAuth }) => ($isAuth ? '12px 20px' : '24px 20px')};

  background-color: transparent;
  border-bottom: ${({ $isAuth }) =>
    $isAuth ? '1px solid rgba(239, 237, 232, 0.2)' : 'none'};
  @media screen and (min-width: 768px) {
    padding: ${({ $isAuth }) => ($isAuth ? '19px 32px' : '32px 32px')};
  }
  @media screen and (min-width: 1440px) {
    position: ${({ $isAuth }) => ($isAuth ? 'static' : 'absolute')};
    padding: ${({ $isAuth }) => ($isAuth ? '19px 96px' : '32px 96px')};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
`;
