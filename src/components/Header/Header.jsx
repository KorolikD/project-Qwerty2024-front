import Logo from '../Logo/index.js';
import Nav from '../Nav/index.js';
import UserBar from '../UserBar/index.js';
import BurgerBtn from '../BurgerBtn/index.js';
import LogOutBtn from '../LogOutBtn/index.js';
import { Topper, Wrapper } from './Header.styled.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectUser, selectIsAuth } from '../../redux/auth/authSelectors.js';

const Header = () => {
  const { blood } = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  console.log(isAuth);
  return (
    <Topper $isAuth={isAuth}>
      <Logo />
      <Wrapper>
        {isDesktop && isAuth && blood && <Nav />}
        {isAuth && <UserBar />}
      </Wrapper>
      {!isDesktop && isAuth && blood && <BurgerBtn />}
      {isDesktop && isAuth && <LogOutBtn />}
    </Topper>
  );
};

export default Header;
