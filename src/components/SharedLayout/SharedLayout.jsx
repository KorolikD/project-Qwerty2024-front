import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/index.js';
import MobileMenu from '../MobileMenu/index.js';
const SharedLayout = () => {
  return (
    <div id="outer-container">
      <MobileMenu />
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
