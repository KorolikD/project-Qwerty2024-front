import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(48, 48, 48, 0.3);
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.primary};
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;
