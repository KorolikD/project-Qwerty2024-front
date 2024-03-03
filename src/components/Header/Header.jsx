import Logo from '../Logo/index.js';
import Nav from '../Nav/index.js';
import UserBar from '../UserBar/index.js';
import { Topper } from './Header.styled.js';

const Header = () => {
  return (
    <Topper>
      <Logo />
      <UserBar />
    </Topper>
  );
};

export default Header;
