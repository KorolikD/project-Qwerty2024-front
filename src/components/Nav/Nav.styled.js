import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.white};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
`;
export const NanList = styled.ul`
  display: flex;
  gap: 16px;
`;
