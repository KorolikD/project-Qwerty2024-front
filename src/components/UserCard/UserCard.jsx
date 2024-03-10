import { useDispatch, useSelector } from 'react-redux';
import LogOutBtn from '../../components/LogOutBtn/LogOutBtn';
import sprite from '../../img/sprite.svg';
import { updateAvatar } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors';
import {
  AddBtn,
  AddSvg,
  Avatar,
  AvatarContainer,
  Container,
  Label,
  SubTitle,
  UserName,
  UserSvg,
} from './UserCard.styled.js';
// import StatisticsInfo from '../../components/StatisticsInfo/StatisticsInfo';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatarDef = (
    <UserSvg>
      <use href={`${sprite}#icon-user`}></use>
    </UserSvg>
  );
  const avatarImg = <Avatar src={user.avatarURL} alt="Avatar" />;
  const avatarShown = user.avatarURL ? avatarImg : avatarDef;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      dispatch(updateAvatar({ avatar: file }));
    }
  };

  const openFileInput = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  return (
    <Container>
      <AvatarContainer>{avatarShown}</AvatarContainer>
      <AddBtn>
        <Label htmlFor="fileInput" onClick={openFileInput}>
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
          name="avatar"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
      </AddBtn>
      <UserName>{user.name}</UserName>
      <SubTitle>User</SubTitle>
      {/* <StatisticsInfo/> */}
      <LogOutBtn />
    </Container>
  );
};

export default UserCard;
