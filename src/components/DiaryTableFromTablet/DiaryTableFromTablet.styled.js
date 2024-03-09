import { createGlobalStyle, styled } from 'styled-components';

export const DiaryTable = styled.table`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.white};
`;

export const TableCell = styled.td`
  padding: 8px 14px;
  border: 1px solid ${(props) => props.theme.colors.formBorder};
  border-radius: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

export const DiaryBtn = styled.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`;

export const TableProductsHead = styled.thead`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};

  & > tr {
    display: grid;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    gap: 8px;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 212px 166px 105px 105px 110px 20px;
    }

    & > th {
      font-weight: 400;
      padding: 0;
    }
  }
`;

export const TableProductsBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > tr {
    display: grid;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    gap: 8px;
    align-items: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 212px 166px 105px 105px 110px 20px;
    }
  }
`;

export const TableExersicesHead = styled.thead`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};

  & > tr {
    display: grid;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    gap: 8px;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
    }
    & > th {
      font-weight: 400;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const TableExercisesBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > tr {
    display: grid;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    gap: 8px;
    align-items: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
    }
  }
`;

export const DiaryTablesStyles = createGlobalStyle`
/* th, td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
`;
