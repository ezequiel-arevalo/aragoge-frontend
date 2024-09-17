import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layout/MainLayout';
import React, { Suspense } from 'react';

const HomePage     = React.lazy(() => import('@/pages/home/HomePage.jsx'));
const ContactPage  = React.lazy(() => import('@/pages/contact/ContactPage'));
const LoginPage    = React.lazy(() => import('@/pages/login/LoginPage'));
const RegisterPage = React.lazy(() => import('@/pages/register/RegisterPage'));
const ProfilePage  = React.lazy(() => import('@/pages/profile/ProfilePage'));
const MarketPage   = React.lazy(() => import('@/pages/marketplace/MarketPage'));
const ErrorPage    = React.lazy(() => import('@/pages/error/ErrorPage'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Rutas para los usuarios */}
          <Route path="home"        element={<HomePage     />} />
          <Route path="marketplace" element={<MarketPage   />} />
          <Route path="contact"     element={<ContactPage  />} />
          <Route path="profile"     element={<ProfilePage  />} />
          <Route path="login"       element={<LoginPage    />} />
          <Route path="register"    element={<RegisterPage />} />

          {/* Redirecciones y error */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
