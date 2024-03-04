const navigationItem = ['Diary', 'Products', 'Exercises'];
import { Link, NanList } from './Nav.styled.js';

const Nav = () => {
  return (
    <nav>
      <NanList>
        {navigationItem.map((item) => (
          <li key={item}>
            <Link to="#" href="#">
              {item}
            </Link>
          </li>
        ))}
      </NanList>
    </nav>
  );
};

export default Nav;
