import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth.operations';
import { RegisterForm } from './RegisterForm/RegisterForm';
// import { useAuth } from 'hooks';
// import { Loader } from './Loader/Loader';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return <RegisterForm />;
};

//https://testback-htcy.onrender.com/api/auth/signup
