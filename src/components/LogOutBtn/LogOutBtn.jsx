import SvgCustom from '../SvgCustom/index.js';
import { Btn, Text } from './LogOutBtn.styled.js';
import theme from '../../styles/theme.js';

const LogOutBtn = () => {
  return (
    <Btn>
      <Text>Logout</Text>
      <SvgCustom icon="icon-logout" size="20" stroke={theme.colors.primary} />
    </Btn>
  );
};
export default LogOutBtn;
