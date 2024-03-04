import navItems from '../../helpers/navItems.js';
import SvgCustom from '../SvgCustom/index.js';
import theme from '../../styles/theme.js';

const MobileMenu = () => {
  return (
    <div>
      <button type="button">
        <SvgCustom
          icon="icon-cross"
          color={theme.colors.white}
          size="24"
          tabSize="32"
        />
      </button>
    </div>
  );
};

export default MobileMenu;
