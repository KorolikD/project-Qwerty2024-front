import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';
import { Burger } from './BurgerBtn.styled.js';

const BurgerBtn = () => {
  return (
    <Burger type="button">
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
