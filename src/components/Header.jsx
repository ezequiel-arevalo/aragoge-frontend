/**
 * @file Header.jsx
 * Componente `Header` que representa el encabezado de la aplicación.
 * Contiene enlaces de navegación, un menú de usuario con opciones de perfil y logout,
 * un botón para alternar entre modos de color (tema oscuro/claro), y un menú hamburguesa
 * para dispositivos móviles.
 */

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '@/router/routes';
import { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Menu, MenuButton, MenuList, MenuItem, Img, Image } from '@chakra-ui/react'; 
import { LogoutButton } from './button/LogoutButton';

/**
 * Componente `Header` que renderiza el encabezado principal de la aplicación.
 * 
 * Contiene navegación responsiva, un menú de usuario desplegable, y un botón
 * para alternar entre temas oscuros y claros. También muestra o esconde enlaces
 * de acuerdo a si el usuario está autenticado o no, y según el rol del usuario.
 * 
 * @component
 * @example
 * return <Header />
 * 
 * @returns {JSX.Element} El componente de encabezado.
 */
export const Header = () => {
  const { user, accessToken } = useSelector(state => state.user); // Obtiene el usuario y el token de Redux
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla el estado del menú hamburguesa
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Controla el estado del menú de perfil

  /**
   * Función para alternar el menú hamburguesa en dispositivos móviles.
   */
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /**
   * Función para alternar el menú de perfil de usuario.
   */
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  /**
   * Función para cerrar el menú hamburguesa.
   */
  const closeMenu = () => setIsMenuOpen(false);

  /**
   * Función para cerrar el menú de perfil.
   */
  const closeProfile = () => setIsProfileOpen(false);

  /**
   * Filtra las rutas de acuerdo con el estado de autenticación y el rol del usuario.
   * 
   * @returns {Array} Arreglo de rutas filtradas según la autenticación del usuario y su rol.
   */
  const filteredLinks = routes.filter(route => {
    if (route.isAuth && !accessToken) return false; // Oculta rutas que requieren autenticación si el usuario no está logueado
    if (route.role && user?.rol_id !== route.role) return false; // Filtra rutas según el rol del usuario
    if (accessToken && (route.name === 'Login' || route.name === 'Register')) return false; // Oculta login/register si el usuario está logueado
    return route.name;
  });

  return (
    <header className="w-full p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center max-w-[1440px]">
        {/* Nombre del sitio */}
        <div className="text-lg font-bold">
          <NavLink to="/" aria-label="Go to home page">
            Aragoge
          </NavLink>
        </div>

        {/* Enlaces de navegación (solo en escritorio) */}
        <ul className="hidden md:flex flex-row gap-6">
          {filteredLinks.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => `${isActive ? 'text-[#DA1641]' : ''}`}
                aria-label={`Go to ${name}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón de perfil, dropdown y tema */}
        <div className="flex items-center gap-4">
          {/* Menú del perfil con dropdown */}
          {accessToken && (
            <Menu isOpen={isProfileOpen}>
              <MenuButton
                as="button"
                className="flex items-center cursor-pointer no-global-styles"
                onClick={toggleProfile}
                aria-label="User profile menu"
              >
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  src='https://bit.ly/dan-abramov'
                  alt='Dan Abramov'
                />
              </MenuButton>
              <MenuList>
                <NavLink to="/profile">
                  <MenuItem onClick={closeProfile} aria-label="Go to profile">
                    <FaUserCircle className="mr-2" /> Profile
                  </MenuItem>
                </NavLink>
                <NavLink to="/logout">
                  <LogoutButton />
                </NavLink>
              </MenuList>
            </Menu>
          )}

          {/* Menú hamburguesa para móvil */}
          <button
            className="text-2xl md:hidden cursor-pointer no-global-styles"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Menú responsive */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center gap-4">
          {filteredLinks.map(({ path, name }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => `${isActive ? 'text-red-500' : ''}`}
                onClick={closeMenu}
                aria-label={`Go to ${name}`}
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
