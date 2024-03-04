import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth, selectUser } from '../redux/auth/authSelectors';

const ProtectedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);

  const shouldRedirect = isAuth && !user.blood;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default ProtectedRoute;
