/**
 * @file MainLayout.js
 * Componente de layout principal que envuelve el contenido de la aplicación.
 * Incluye el header, footer, y el contenido principal renderizado a través de `Outlet`.
 */

import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

/**
 * Componente `MainLayout` que define la estructura principal de la página.
 * 
 * Renderiza un layout flexible con una disposición vertical (flex-column),
 * donde el `Header` está al inicio, el contenido dinámico se muestra en el
 * `main` a través del `Outlet` (que renderiza las rutas hijas), y el `Footer`
 * se encuentra al final.
 * 
 * @component
 * @example
 * // Se utiliza dentro de un archivo de rutas para definir un layout base
 * <Route path="/" element={<MainLayout />}>
 *   <Route path="home" element={<HomePage />} />
 * </Route>
 * 
 * @returns {JSX.Element} La estructura del layout principal.
 */
export const MainLayout = () => {
    return (
        <>
            <Header />
            
            <main>
                <Outlet />
            </main>
            
            <Footer />
        </>
    );
};
