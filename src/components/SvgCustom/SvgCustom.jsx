import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

const SvgCustom = ({ svgName, width, height, background }) => {
  return (
    <SvgWrap width={width} height={height} background={background}>
      <svg width={width} height={height}>
        <use href={`${sprite}#${svgName}`} />
      </svg>
    </SvgWrap>
  );
};

export default SvgCustom;
