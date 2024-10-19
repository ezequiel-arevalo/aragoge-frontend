import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '@/router/routes';
import { useState } from 'react';
import { LucideMenu, LucideX, LucideUser } from 'lucide-react';

export const Header = () => {
  const { user, accessToken } = useSelector(state => state.user); // Obtiene el usuario y el token de Redux
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú hamburguesa

  // Alternar el menú hamburguesa en dispositivos móviles
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Cierra el menú hamburguesa
  const closeMenu = () => setIsMenuOpen(false);

  // Filtra las rutas según autenticación y rol del usuario
  const filteredLinks = routes.filter(route => {
    if (route.isAuth && !accessToken) return false; // Oculta rutas que requieren autenticación si el usuario no está logueado
    if (route.role && user?.rol_id !== route.role) return false; // Filtra rutas según el rol del usuario
    if (accessToken && (route.name === 'Login' || route.name === 'Register')) return false; // Oculta login/register si el usuario está logueado
    return route.name; // Muestra solo las rutas que tienen un nombre definido
  });

  return (
    <header className="sticky top-0 z-10 bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo o Nombre del Sitio */}
        <NavLink to="/" className="text-2xl font-bold text-[#da1641]">
          Aragoge
        </NavLink>

        {/* Menú de navegación en escritorio */}
        <ul className="hidden md:flex flex-row space-x-8">
          {filteredLinks.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-[#da1641] transition duration-300 ${isActive ? 'text-[#da1641]' : ''}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botones de usuario (Login/Logout) y menú hamburguesa */}
        <div className="flex items-center space-x-4">
          {/* Mostrar botones según el estado del usuario */}
          {!accessToken ? (
            <>
              <NavLink to="/login" className="text-gray-600 hover:text-[#da1641] transition duration-300">
                Iniciar Sesión
              </NavLink>
              <NavLink
                to="/register"
                className="bg-[#da1641] text-white px-4 py-2 rounded-full hover:bg-[#b81235] transition duration-300"
              >
                Registrarse
              </NavLink>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink to="/profile" className="flex items-center space-x-2 text-gray-600 hover:text-[#da1641]">
                <LucideUser className="w-6 h-6" />
                <span>{user.first_name}</span>
              </NavLink>
              <NavLink
                to="/logout"
                className="bg-[#da1641] text-white px-4 py-2 rounded-full hover:bg-[#b81235] transition duration-300"
              >
                Cerrar Sesión
              </NavLink>
            </div>
          )}

          {/* Botón de menú hamburguesa para móvil */}
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          >
            {isMenuOpen ? <LucideX /> : <LucideMenu />}
          </button>
        </div>
      </nav>

      {/* Menú responsive para móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 mb-4 p-4">
          {filteredLinks.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-[#da1641] transition duration-300 ${isActive ? 'text-[#da1641]' : ''}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
