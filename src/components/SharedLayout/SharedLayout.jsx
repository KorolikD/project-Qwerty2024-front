import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/index.js';
import MobileMenu from '../MobileMenu/index.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/auth/authSelectors.js';
import { useState } from 'react';

const SharedLayout = () => {
  const [isOpen, setIsopen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div id="outer-container">
      {!isDesktop && isAuth && <MobileMenu />}
      <div id="page-wrap">
        <Header />
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
