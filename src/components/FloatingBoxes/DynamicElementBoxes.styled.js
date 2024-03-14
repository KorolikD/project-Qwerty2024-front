import styled from 'styled-components';

const Box = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  z-index: 2;
`;

export const VideoTutorialBox = styled(Box)`
  background-color: rgba(48, 48, 48, 1);

  width: 146px;
  height: 66px;

  bottom: 186px;
  left: 44px;

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    bottom: 214px;

    padding: 20px 36px 20px 23px;
  }

  @media screen and (min-width: 1200px) {
    width: 206px;
    height: 96px;
    bottom: 320px;
    left: 0;
  }
`;

export const CaloriesBox = styled(Box)`
  background-color: rgba(239, 137, 100, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px;
  min-width: 119px;
  height: 76px;

  bottom: 40px;
  right: 20px;

  @media screen and (min-width: 768px) {
    min-width: 180px;
    height: 110px;

    bottom: 48px;
    right: 32px;
    gap: 12px;
    padding: 14px 28px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 180px;
    height: 110px;
    bottom: 171px;
    right: 32px;
  }
`;

export const VideoSpan = styled.span`
  color: ${(props) => props.theme.colors.white};

  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const VideoParagraph = styled.p`
  color: ${(props) => props.theme.colors.grey};
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const CalorieCountSpan = styled.span`
  color: ${(props) => props.theme.colors.white};
  margin-top: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;

    line-height: 50px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const CalorieNum = styled.span`
  color: ${(props) => props.theme.colors.textWhite30};
  margin-left: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const VideoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${(props) => props.theme.colors.lightSecondary};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`;

export const CalorieIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.lightSecondary};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledSVGIcon = styled.svg`
  width: 12px;
  height: 12px;

  fill: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const CalorieIcon = styled.svg`
  width: 11px;
  height: 12px;
  fill: ${(props) => props.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;
