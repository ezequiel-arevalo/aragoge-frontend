import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useBoolean, useColorMode } from "@chakra-ui/react";

export const Header = () => {
  const [isMenuOpen, { toggle: toggleMenu, off: closeMenu }] = useBoolean();
  const [isProfileOpen, { toggle: toggleProfile, off: closeProfile }] = useBoolean();
  const { colorMode, toggleColorMode } = useColorMode();
  const links = ["Home", "Marketplace", "Contact", "Login", "Register"];

  return (
    <header className="w-full p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center max-w-[1440px]">
        <div className="flex items-center">
          {/* Nombre del sitio */}
          <div className="text-lg font-bold">
            <NavLink to="/" aria-label="Go to home page">
              Aragoge
            </NavLink>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <ul className="hidden md:flex flex-row gap-6">
          {links.map((link, index) => (
            <li key={index}>
            <NavLink
              key={index}
              to={`/${link.toLowerCase().replace(" ", "")}`}
              className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
              aria-label={`Go to ${link}`}
            >
              {link}
            </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón y foto de perfil con dropdown */}
        <div className="flex items-center gap-4">
          {/* Avatar del perfil con dropdown */}
          <Menu isOpen={isProfileOpen}>
            <MenuButton
              as="button"
              className="flex items-center cursor-pointer"
              onClick={toggleProfile}
              aria-label="User profile menu"
            >
              <i className="fas fa-user-circle text-2xl"></i>
            </MenuButton>

            <MenuList>
              <NavLink to="/profile">
                <MenuItem onClick={closeProfile} aria-label="Go to profile">
                  <i className="fas fa-user mr-2"></i> Profile
                </MenuItem>
              </NavLink>

              <NavLink to="/register">
                <MenuItem onClick={closeProfile} aria-label="Log out">
                  <i className="fas fa-sign-out-alt mr-2"></i> Logout
                </MenuItem>
              </NavLink>
            </MenuList>
          </Menu>

          {/* Botón para cambiar el tema */}
          <button onClick={toggleColorMode} aria-label="Toggle theme" className="text-xl cursor-pointer">
            {colorMode === "light" ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>

          {/* Botón de hamburguesa para menú móvil */}
          <button
            className="text-2xl md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </div>
      </nav>

      {/* Menú responsive */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
                onClick={closeMenu}
                aria-label={`Go to ${link}`}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};