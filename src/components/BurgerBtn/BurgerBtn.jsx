import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { Burger } from './BurgerBtn.styled.js';

const BurgerBtn = ({ isOpen }) => {
  return (
    <Burger onClick={isOpen} type="button">
      <SvgCustom
        icon="icon-menu"
        size="24"
        color={theme.colors.primary}
        tabSize="32"
      />
    </Burger>
  );
};

export default BurgerBtn;
