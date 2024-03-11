import { push as Menu } from 'react-burger-menu';
import CrossBtn from './CrossBtn/index.js';
import MobileLogOutBtn from './MoileLogOutBtn/index.js';
import NavList from './NavList/index.js';
import { useMediaQuery } from 'react-responsive';
import './menu.css';

const MobileMenu = ({ isOpen, change, toggleMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Menu
      isOpen={isOpen}
      onStateChange={(state) => change(state.isOpen)}
      customBurgerIcon={false}
      customCrossIcon={false}
      width={isMobile ? 200 : 350}
      right
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <NavList toggleMenu={toggleMenu} />
      <MobileLogOutBtn toggleMenu={toggleMenu} />
      <CrossBtn toggleMenu={toggleMenu} />
    </Menu>
  );
};

export default MobileMenu;
