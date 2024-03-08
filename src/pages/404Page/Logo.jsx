

import logoMobile404 from '/logo/404-mobile-Logo.png';
import logoMobile4042x from '/logo/404-mobile-Logo2x.png';
import logodesctop404 from '/logo/404-desktopLogo.png';
import logodesctop4042x from '/logo/404-desktopLogo2x.png';
import { Link } from 'react-router-dom';

export const Logo404 = () => {
  return (
    <Link to="diary">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${logoMobile404} 1x,${logoMobile4042x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${logodesctop404} 1x,${logodesctop4042x} 2x`}
        />
        <img src={logodesctop404} alt="Logo" />
      </picture>
    </Link>
  );
};

export default Logo404;
