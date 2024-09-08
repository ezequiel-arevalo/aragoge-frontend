import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ErrorPage } from '../pages/ErrorPage';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="404" element={<ErrorPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}