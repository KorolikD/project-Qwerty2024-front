import logoMobile from '/logo/mobile-logo.png';
import logoMobile2x from '/logo/mobile-logo@2x.png';
import logodesctop from '/logo/desktop-logo.png';
import logodesctop2x from '/logo/desktop-logo@2x.png';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="diary">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${logoMobile} 1x,${logoMobile2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${logodesctop} 1x,${logodesctop2x} 2x`}
        />
        <img src={logodesctop} alt="Logo" />
      </picture>
    </Link>
  );
};

export default Logo;
