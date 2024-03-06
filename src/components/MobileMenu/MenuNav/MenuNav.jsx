import navItems from '../../../helpers/navItems.js';
import { NavLink } from 'react-router-dom';
const MenuNav = () => {
  return (
    <>
      {navItems.map((item) => {
        return <NavLink key={item} to={item.toLowerCase()}></NavLink>;
      })}
    </>
  );
};

export default MenuNav;

//
// ({navItems.map((item)=>{
//     return <NavLink to={item.toLowerCase()}></NavLink>
//   })});
