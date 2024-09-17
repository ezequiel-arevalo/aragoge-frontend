import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layout/MainLayout';
import React, { Suspense, lazy } from 'react';

// Importación de páginas de forma lazy
const HomePage     = lazy(() => import('@/pages/home/HomePage.jsx'));
const ContactPage  = lazy(() => import('@/pages/contact/ContactPage'));
const LoginPage    = lazy(() => import('@/pages/login/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/register/RegisterPage'));
const ProfilePage  = lazy(() => import('@/pages/profile/ProfilePage'));
const MarketPage   = lazy(() => import('@/pages/marketplace/MarketPage'));
const ErrorPage    = lazy(() => import('@/pages/error/ErrorPage'));

// Componente reutilizable para manejar rutas con Suspense
const LazyRoute = ({ element }) => (
  <Suspense fallback={<div>Loading...</div>}>
    {element}
  </Suspense>
);

// routes.js o en el archivo donde defines tus rutas
export const routes = [
  { path: 'home', element: <HomePage />, name: 'Home' },
  { path: 'marketplace', element: <MarketPage />, name: 'Marketplace' },
  { path: 'contact', element: <ContactPage />, name: 'Contact' },
  { path: 'profile', element: <ProfilePage />, name: 'Profile' },
  { path: 'login', element: <LoginPage />, name: 'Login' },
  { path: 'register', element: <RegisterPage />, name: 'Register' },
  { path: '*', element: <ErrorPage />, name: 'Error' },
];

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Mapeo de rutas para evitar repetición */}
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<LazyRoute element={element} />}
          />
        ))}
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
