import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 111px;
  height: 38px;
  color: #efede8;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  padding: 10px 27px;
  @media screen and (min-width: 768px) {
    width: 119px;
    height: 44px;
    font-size: 16px;
    line-height: 1.5;
  }

  &.active {
    border-color: #efede8;
    width: 86px;
    height: 38px;
    @media screen and (min-width: 768px) {
      width: 91px;
      height: 44px;
    }
  }
`;
