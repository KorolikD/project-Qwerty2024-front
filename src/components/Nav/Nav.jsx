import navigationItem from '../../helpers/navItems.js';
import { Link, NavList } from './Nav.styled.js';

const Nav = () => {
  return (
    <nav>
      <NavList>
        {navigationItem.map((item) => (
          <li key={item}>
            <Link to={item.toLowerCase()}>{item}</Link>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Nav;
