import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from './routes';
import { MainLayout } from '@/layout/MainLayout';
import * as Pages from '@/pages/index';
import { PlanningDetailPage } from '@/pages/plannings/PlanningDetailPage';

export const AppRouter = () => {
  const { user, accessToken } = useSelector(state => state.user);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ path, component, isAuth, role }, index) => {
          const PageComponent = Pages[component];

          // Rutas privadas (requiere autenticación)
          if (isAuth && !accessToken) {
            return <Route key={index} path={path} element={<Navigate to="/login" />} />;
          }

          // Rutas restringidas por rol
          if (role && user?.rol_id !== role) {
            return <Route key={index} path={path} element={<Navigate to="/home" />} />;
          }

          // Rutas públicas y privadas accesibles
          return <Route key={index} path={path} element={<PageComponent />} />;
        })}

        {/* Ruta dinámica para planificación */}
        <Route path="/planning/:id" element={<PlanningDetailPage />} />

        {/* Redirección por defecto */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
};
