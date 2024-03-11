import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { updateAvatar } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
import SvgCustom from '../SvgCustom/SvgCustom.jsx';
import theme from '../../styles/theme.js';
import {
  AddBtn,
  AddSvg,
  Avatar,
  AvatarContainer,
  Container,
  Label,
  ProfileInfoItem,
  ProfileInfoList,
  ProfileLogOut,
  SubTitle,
  UserName,
  UserNameWrap,
  UserSvg,
} from './UserCard.styled.js';
import {
  AttentionDiv,
  DashboardText,
  SvgTextWrap,
} from '../DayDashboard/DayDashboard.styled.js';

const UserCard = () => {
  const dispatch = useDispatch();
  const { name, avatarURL, bmr, dpa } = useSelector(selectUser);

  const avatarDef = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );
  const avatarImg = <Avatar src={avatarURL} alt="Avatar" />;
  const avatarShown = avatarURL ? avatarImg : avatarDef;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(updateAvatar({ avatar: file }));
    }
  };

  return (
    <Container>
      <AvatarContainer>
        {avatarShown}
        <AddBtn>
          <Label htmlFor="fileInput">
            <AddSvg>
              <use
                href={`${sprite}#icon-add-avatar`}
                aria-label="Upload Avatar"
              ></use>
            </AddSvg>
          </Label>
          <input
            type="file"
            accept="image/*, .jpg, .jpeg, .png"
            id="fileInput"
            name="avatar"
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
        </AddBtn>
      </AvatarContainer>

      <UserNameWrap>
        <UserName>{name}</UserName>
        <SubTitle>User</SubTitle>
      </UserNameWrap>

      <ProfileInfoList>
        <ProfileInfoItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-food"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Daily calorie intake</p>
          </SvgTextWrap>
          <DashboardText>{bmr}</DashboardText>
        </ProfileInfoItem>
        <ProfileInfoItem>
          <SvgTextWrap>
            <SvgCustom
              icon="icon-dumbbell"
              size="20"
              color={theme.colors.secondary}
            />
            <p>Daily physical activity</p>
          </SvgTextWrap>
          <DashboardText>{dpa} min</DashboardText>
        </ProfileInfoItem>
      </ProfileInfoList>

      <AttentionDiv>
        <div>
          <SvgCustom
            icon="icon-exclamation-mark"
            size="16"
            stroke={theme.colors.white}
          />
        </div>
        <p>
          We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.
        </p>
      </AttentionDiv>
      <ProfileLogOut>
        <LogOutBtn />
      </ProfileLogOut>
    </Container>
  );
};

export default UserCard;
