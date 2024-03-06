import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { push as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import styles from './menuStyle.js';

const MobileMenu = () => {
  return (
    <Menu
      width={200}
      styles={styles}
      right
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      customBurgerIcon={
        <SvgCustom
          icon="icon-menu"
          size="24"
          color={theme.colors.primary}
          tabSize="32"
        />
      }
      customCrossIcon={
        <SvgCustom icon="icon-cross" size="24" color="#ffffff" tabSize="32" />
      }
    >
      <NavLink to="diary">Diary</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="exercises">Exercises</NavLink>
    </Menu>
  );
};

export default MobileMenu;
