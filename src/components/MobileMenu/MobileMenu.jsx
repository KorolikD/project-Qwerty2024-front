import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { push as Menu } from 'react-burger-menu';
import { Link } from './MobileMenu.styled.js';
import './menu.css';

import MobileLogOutBtn from './MoileLogOutBtn/index.js';
import { useMediaQuery } from 'react-responsive';
const MobileMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <Menu
      customBurgerIcon={false}
      customCrossIcon={false}
      width={isMobile ? 200 : 350}
      right
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <Link to="diary">Diary</Link>
      <Link to="products">Products</Link>
      <Link to="exercises">Exercises</Link>
      <MobileLogOutBtn />
    </Menu>
  );
};

export default MobileMenu;
