import SvgCustom from '../../SvgCustom/index.js';
import { Btn } from './CrossBtn.styled.js';

const CrossBtn = ({ toggleMenu }) => {
  return (
    <Btn onClick={toggleMenu} type="button">
      <SvgCustom icon="icon-cross" size="24" stroke="#FFFFFF" tabSize="32" />
    </Btn>
  );
};

export default CrossBtn;
