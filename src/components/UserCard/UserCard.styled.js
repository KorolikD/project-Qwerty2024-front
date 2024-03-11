import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 439px;
    gap: 32px;
    margin-top: 64px;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Avatar = styled.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`;

export const AddBtn = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const AddSvg = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const UserSvg = styled.svg`
  width: 61px;
  height: 62px;
  fill: ${({ theme }) => theme.colors.formBorder};
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`;
export const Label = styled.label`
  cursor: pointer;
`;

export const UserNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 767px) {
    margin-top: -8px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`;

export const SubTitle = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.33;
`;

export const ProfileInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  /* margin-top: 40px;
  margin-bottom: 40px; */

  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`;

export const ProfileInfoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  padding: 14px;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 767px) {
    max-width: 157px;
  }

  @media screen and (min-width: 768px) {
    height: 108px;
    width: 209px;
  }
`;

export const ProfileLogOut = styled.div`
  margin-left: auto;
`;
