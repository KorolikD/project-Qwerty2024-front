import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { reveal as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const MobileMenu = () => {
  return (
    <Menu
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      right
      styles={styles}
    >
      <a>1</a>
      <a>1</a>
      <a>1</a>
      <a>1</a>
      <a>1</a>
    </Menu>
  );
};

export default MobileMenu;
