import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors';
import { Container, AvatarContainer, Avatar, UserSvg, Label, UserName, SubTitle, AddBtn, AddSvg  } from './UserCard.styled.js';
import sprite from '../../img/sprite.svg';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const avatarDef = ( <UserSvg><use href={`${sprite}#icon-user`}></use></UserSvg>);
  const avatarImg = (<Avatar src={user.avatarUrl} alt="Avatar"/>)
  const avatarShown = user.avatarUrl ? avatarImg : avatarDef;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(updateAvatar(file)); 
    }
  };

  const openFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  return (
    <Container>
      <AvatarContainer>
        {avatarShown}
      </AvatarContainer>
      <AddBtn>
        <Label htmlFor="fileInput" onClick={openFileInput}>
          <AddSvg className="upload-icon">
            <use href={`${sprite}#icon-add-avatar`} aria-label="Upload Avatar"></use>
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
      <UserName>{user.name}</UserName>
      <SubTitle>User</SubTitle>
    </Container>
  );
};

export default UserCard;
