import styled from 'styled-components';

export const DiaryTableList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.secondary};
`;

export const DiaryTableItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GroupTableItemWrap = styled.div`
  display: flex;

  > div {
    overflow: hidden;

    &:nth-child(1) {
      width: 81px;
      margin-right: 16px;
    }

    &:nth-child(2) {
      width: 80px;
      margin-right: 16px;
    }

    &:nth-child(3) {
      width: 76px;
      margin-right: 16px;
    }
  }

  > button {
    margin-top: 33px;
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
`;

export const DiaryItemInfo = styled.p`
  margin-top: 8px;
  padding: 10px 14px;
  border: 1px solid ${(props) => props.theme.colors.formBorder};
  border-radius: 12px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  line-height: 1.28;

  &::first-letter {
    text-transform: uppercase;
  }

  &::before {
    ${(props) =>
      props.$recommend &&
      `
      content: '';
      display: inline-block;
      margin-right: 8px;
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: ${props.$color ? '#419B09' : '#E9101D'};
    `}
  }
`;
