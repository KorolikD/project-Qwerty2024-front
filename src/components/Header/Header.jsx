import Logo from '../Logo/index.js';
import Nav from '../Nav/index.js';
import UserBar from '../UserBar/index.js';
import LogOutBtn from '../LogOutBtn/index.js';
import { Topper, Wrapper } from './Header.styled.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectUser, selectIsAuth } from '../../redux/auth/authSelectors.js';
import BurgerBtn from '../BurgerBtn/index.js';

const Header = ({ toggleMenu }) => {
  const { blood } = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <Topper $isAuth={isAuth}>
      <Logo />
      {isAuth && (
        <Wrapper>
          {isDesktop && blood && <Nav />}
          <UserBar />
        </Wrapper>
      )}
      {isDesktop && isAuth && <LogOutBtn />}
      {!isDesktop && isAuth && <BurgerBtn isOpen={toggleMenu} />}
    </Topper>
  );
};

export default Header;
