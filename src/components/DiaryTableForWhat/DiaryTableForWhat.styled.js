import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryTablesWrap = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 16px 8px 16px 16px;
  height: ${(props) => (props.list === 'no' ? '335px' : 'auto')};
  width: 335px;
  border: 1px solid ${(props) => props.theme.colors.textWhite40};
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 234px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
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

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
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
