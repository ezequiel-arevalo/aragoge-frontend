import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/layout/MainLayout';
import { HomePage, ContactPage, LoginPage, RegisterPage, ProfilePage, MarketPage, ErrorPage} from '@/pages/index.js'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Rutas para los usuarios */}
        <Route path="home"                                     element={<HomePage     />} />
        <Route path="marketplace"                              element={<MarketPage   />} />
        <Route path="contact"                                  element={<ContactPage  />} />
        <Route path="profile"                                  element={<ProfilePage  />} /> {/* profile/userId */}
        <Route path="login"                                    element={<LoginPage    />} />
        <Route path="register"                                 element={<RegisterPage />} />

        {/* Rutas para los profesionales */}
        {/* <Route path="professionals/home"                   element={<             />} /> */}
        {/* <Route path="professionals/create"                 element={<             />} /> */}
        {/* <Route path="professionals/edit/:serviceId"        element={<             />} /> */}
        {/* <Route path="professionals/delete/:serviceId"      element={<             />} /> */}
        {/* <Route path="professionals/profile"                element={<             />} /> */}
        {/* <Route path="professionals/public/:professionalId" element={<             />} /> */}

        {/* Redirecciones y error */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};