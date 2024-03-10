import SvgCustom from '../../SvgCustom/index.js';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations.js';
import { Btn, Text } from './MobileLogOutBtn.styled.js';

const MobileLogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <Btn onClick={() => dispatch(logOut())}>
      <Text>Logout</Text>
      <SvgCustom icon="icon-logout" size="20" stroke="#EFEDE8" />
    </Btn>
  );
};
export default MobileLogOutBtn;
