const navigationItem = ['Diary', 'Products', 'Exercises'];

const Nav = () => {
  return (
    <ul>
      {navigationItem.map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
