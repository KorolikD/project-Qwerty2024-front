import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/index.js';
import MobileMenu from '../MobileMenu/index.js';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/auth/authSelectors.js';
import { useState } from 'react';

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const handleStateChange = (state) => {
    setIsOpen(state);
  };
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div style={{ height: '100%' }} id="outer-container">
      {!isDesktop && isAuth && (
        <MobileMenu
          isOpen={isOpen}
          change={handleStateChange}
          toggleMenu={toggleMenu}
        />
      )}
      <div style={{ height: '100%' }} id="page-wrap">
        <Header toggleMenu={toggleMenu} />
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
