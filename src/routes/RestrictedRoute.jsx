import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../redux/auth/authSelectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
