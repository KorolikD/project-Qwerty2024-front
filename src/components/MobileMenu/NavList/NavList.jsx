import navigationItem from '../../../helpers/navItems.js';
import { Link } from './NavList.styled.js';
const NavList = ({ toggleMenu }) => {
  return (
    <>
      {navigationItem.map((item) => (
        <Link key={item} onClick={toggleMenu} to={item.toLowerCase()}>
          {item}
        </Link>
      ))}
    </>
  );
};

export default NavList;
