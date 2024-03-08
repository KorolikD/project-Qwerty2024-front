import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth, selectIsRefresh } from '../redux/auth/authSelectors';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(selectIsRefresh);
  const isAuth = useSelector(selectIsAuth);

  const shouldRedirect = !isRefreshing && !isAuth;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
