import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
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
