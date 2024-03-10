import styled from 'styled-components';

export const DashboardSection = styled.section`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`;

export const DashboardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 13px;
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 1.33;
  color: ${(props) => props.theme.colors.textWhite40};

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    line-height: 1.5;
  }
`;

export const DashboardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  padding: 14px;

  border: ${(props) => {
    if (props.$border === 'green') return '1px solid #3CBF61';
    if (props.$border === 'red') return '1px solid #E9101D';
    return `1px solid ${props.theme.colors.textWhite40}`;
  }};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  &:nth-last-child(-n + 2) {
    @media screen and (max-width: 767px) {
      height: 108px;
    }
  }

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.textWhite40};
    div {
      color: rgba(239, 237, 232, 0.8);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    height: 116px;
  }
`;

export const SvgTextWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const DashboardText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const AttentionDiv = styled.div`
  display: flex;
  gap: 8px;

  & > div {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 5px;
    background-color: ${(props) => props.theme.colors.lightSecondary};
    border-radius: 50%;
  }

  & > p {
    color: ${(props) => props.theme.colors.textWhite30};
    font-size: 14px;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;
