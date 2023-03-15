import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { current } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current);
  }, [dispatch]);

  return (
    <Suspense fallback={<p>...loading</p>}>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
