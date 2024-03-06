import SvgCustom from '../SvgCustom/index.js';
import { Btn, Text } from './LogOutBtn.styled.js';
import theme from '../../styles/theme.js';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations.js';

const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <Btn onClick={() => dispatch(logOut())}>
      <Text>Logout</Text>
      <SvgCustom icon="icon-logout" size="20" stroke={theme.colors.primary} />
    </Btn>
  );
};
export default LogOutBtn;
