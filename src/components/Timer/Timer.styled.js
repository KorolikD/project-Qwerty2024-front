import styled from 'styled-components';
import theme from '../../styles/theme';

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerTitle = styled.p`
  color: ${theme.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`;

export const TimerClock = styled.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`;

export const TimerValue = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${theme.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`;

export const TimerButton = styled.button`
  cursor: pointer;
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  border-radius: 4px;

  transition: background-color 350ms ease;
  &:hover,
  &:focus {
    background-color: ${theme.colors.secondary};
  }
`;
