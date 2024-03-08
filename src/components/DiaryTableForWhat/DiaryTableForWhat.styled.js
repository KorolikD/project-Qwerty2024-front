import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryTablesWrap = styled.div`
  position: relative;
  overflow: auto;
  margin: 0 auto;
  padding: 16px 8px 16px 16px;
  border: 1px solid ${(props) => props.theme.colors.textWhite40};
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  height: ${(props) => (!props.list ? '335px' : 'auto')};
`;

export const DiaryTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  font-size: 14px;
  line-height: 1.28;
  color: ${(props) => props.theme.colors.textWhite50};
`;

export const Link = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const DiaryNotFoundText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1.28;
  color: ${(props) => props.theme.colors.textWhite30};
`;
