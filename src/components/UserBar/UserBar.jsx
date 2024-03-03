import SvgCustom from '../SvgCustom/index.js';
import { Wrapper, Link, Circle, Burger } from './UserBar.styled.js';
import theme from '../../styles/theme.js';

const UserBar = () => {
  return (
    <Wrapper>
      <Link to="#">
        <SvgCustom
          icon="icon-settings"
          size="24"
          stroke="rgba(239, 237, 232, 0.3)"
          tabSize="28"
        />
      </Link>
      <Link to="#">
        <Circle>
          <SvgCustom
            icon="icon-user"
            size="21"
            color="rgba(239, 237, 232, 0.1)"
            tabSize="24"
          />
        </Circle>
      </Link>
      <Burger type="button">
        <SvgCustom
          icon="icon-menu"
          size="24"
          color={theme.colors.primary}
          tabSize="32"
        />
      </Burger>
    </Wrapper>
  );
};

export default UserBar;
