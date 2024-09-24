import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '@/router/routes';
import { useState } from 'react';
import { FaUserCircle, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Menu, MenuButton, MenuList, MenuItem, useColorMode } from '@chakra-ui/react'; 
import { LogoutButton } from './button/LogoutButton';

export const Header = () => {
  const { user, accessToken } = useSelector(state => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const closeProfile = () => setIsProfileOpen(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const filteredLinks = routes.filter(route => {
    if (route.isAuth && !accessToken) return false;
    if (route.role && user?.rol_id !== route.role) return false;
    if (accessToken && (route.name === 'Login' || route.name === 'Register')) return false;
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
                className={({ isActive }) => `${isActive ? 'text-red-500' : ''}`}
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
                className="flex items-center cursor-pointer"
                onClick={toggleProfile}
                aria-label="User profile menu"
              >
                <FaUserCircle className="text-2xl" />
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

          {/* Botón para cambiar el tema */}
          <button onClick={toggleColorMode} aria-label="Toggle theme" className="text-xl cursor-pointer">
            {colorMode === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Menú hamburguesa para móvil */}
          <button
            className="text-2xl md:hidden cursor-pointer"
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