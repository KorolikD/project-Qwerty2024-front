import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors';
import {
  Container,
  AvatarContainer,
  Avatar,
  UserSvg,
  Label,
  UserName,
  SubTitle,
  AddBtn,
  AddSvg,
} from './UserCard.styled.js';
import sprite from '../../img/sprite.svg';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
// import StatisticsInfo from '../../components/StatisticsInfo/StatisticsInfo';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatarDef = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );
  const avatarImg = <Avatar src={user.avatarUrl} alt="Avatar" />;
  const avatarShown = user.avatarUrl ? avatarImg : avatarDef;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(updateAvatar(file));
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
            accept=".jpg, .jpeg"
            id="fileInput"
            name="fileInput"
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
        </AddBtn>
      </AvatarContainer>

      <UserName>{user.name}</UserName>
      <SubTitle>User</SubTitle>
      {/* <StatisticsInfo/> */}
      <LogOutBtn />
    </Container>
  );
};

export default UserCard;
