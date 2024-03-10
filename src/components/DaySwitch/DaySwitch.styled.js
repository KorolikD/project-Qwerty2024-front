import { styled } from 'styled-components';

export const DaySwitchWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    top: -20px;
    gap: 40px;
  }

  > button {
    display: flex;
    gap: 8px;
    align-items: center;
    background: transparent;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
`;

export const SwitchWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }
`;
