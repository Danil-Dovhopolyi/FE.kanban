import { type RouteObject, Navigate } from 'react-router';
import { AuthLayout } from './auth.layout';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export const authRoutes: RouteObject = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    { index: true, element: <Navigate to="login" replace /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
};
