import SvgCustom from '../SvgCustom/index.js';
import { Wrapper, Link, Circle } from './UserBar.styled.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors.js';
const UserBar = () => {
  const { avatarURL } = useSelector(selectUser);
  return (
    <Wrapper>
      <Link to="#">
        <SvgCustom
          icon="icon-settings"
          size="24"
          stroke="rgba(239, 237, 232, 0.3)"
          tabSize="28"
        />
      </Link>
      <Link to="#">
        <Circle>
          <img src={avatarURL} alt="avatar" />
          <SvgCustom
            icon="icon-user"
            size="21"
            color="rgba(239, 237, 232, 0.1)"
            tabSize="24"
          />
        </Circle>
      </Link>
    </Wrapper>
  );
};

export default UserBar;
