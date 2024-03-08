import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

const SvgCustom = ({ icon, size, color, stroke, hover, tabSize }) => {
  return (
    <SvgWrap
      $size={size}
      $color={color}
      $stroke={stroke}
      $hover={hover}
      $tabSize={tabSize}
    >
      <use href={`${sprite}#${icon}`} />
    </SvgWrap>
  );
};

export default SvgCustom;
