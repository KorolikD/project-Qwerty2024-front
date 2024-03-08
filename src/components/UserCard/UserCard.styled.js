import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`;

export const AvatarContainer = styled.div`
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
    background-color: green;

`

export const AddSvg = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  /* top: -13px; */
  left: 0px;

`
export const UserSvg = styled.svg`
    width: 61px;
    height: 62px;
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`
export const Label = styled.label`
    cursor: pointer;
    position: absolute;
    background-color: green; 

 `

export const UserName = styled.p`
    margin-top: 32px;
    color: ${({ theme }) => theme.colors.white};
@media screen and (min-width: 768px) {

  }
  
`;

export const SubTitle = styled.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  
`;