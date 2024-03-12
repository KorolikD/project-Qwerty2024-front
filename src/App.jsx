import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute, PrivateRoute, ProtectedRoute } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from './redux/auth/authSelectors.js';
import { refreshUser } from './redux/auth/authOperations.js';
import { Loader } from './components/Loader/Loader.jsx';

const SharedLayout = lazy(() => import('./components/SharedLayout'));
const DiaryPage = lazy(() => import('./pages/DiaryPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const ExercisesList = lazy(() => import('./components/ExercisesList'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const NotFoundPage = lazy(() => import('./pages/404Page'));
const ExercisesSubcategoriesList = lazy(() =>
  import('./components/ExercisesSubcategoriesList')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute component={WelcomePage} redirectTo="/diary" />
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute
                component={
                  <ProtectedRoute component={DiaryPage} redirectTo="/profile" />
                }
                redirectTo="/"
              />
            }
          />
          <Route
            path="exercises"
            element={
              <PrivateRoute
                component={
                  <ProtectedRoute
                    component={ExercisesPage}
                    redirectTo="/profile"
                  />
                }
                redirectTo="/"
              />
            }
          >
            <Route path=":category" element={<ExercisesSubcategoriesList />} />
            <Route path=":category/:subcategory" element={<ExercisesList />} />
          </Route>
          <Route
            path="products"
            element={
              <ProductsPage />
              // <PrivateRoute
              //   component={
              //     <ProtectedRoute
              //       component={ProductsPage}
              //       redirectTo="/profile"
              //     />
              //   }
              //   redirectTo="/"
              // />
            }
          />
          <Route
            path="profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          />
          <Route
            path="signin"
            element={
              <RestrictedRoute component={SignInPage} redirectTo="/diary" />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute component={SignUpPage} redirectTo="/diary" />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
