import sprite from '../../img/sprite.svg'
import { LogoWrapper } from './ErrorPage.styled';

export const Logo = () => (
  <LogoWrapper>
    <svg width={36} height={13}> 
   <use xlinkHref={`${sprite}#icon-dumbbell`} />
   </svg>
   <svg preserveAspectRatio="none" >
   <use xlinkHref={`${sprite}#icon-logo-mob`} />
   </svg>
  </LogoWrapper>
);