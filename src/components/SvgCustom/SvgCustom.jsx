import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

const SvgCustom = ({ svgName, width, height, color }) => {
  return (
    <SvgWrap svgName={svgName} width={width} height={height} color={color}>
      <svg width={width} height={height}>
        <use href={`${sprite}#${svgName}`} />
      </svg>
    </SvgWrap>
  );
};

export default SvgCustom;
