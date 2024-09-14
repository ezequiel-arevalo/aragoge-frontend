import { NavLink } from "react-router-dom";
import { Box, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, useBoolean, useColorMode} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon ,SunIcon, MoonIcon } from "@chakra-ui/icons";

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
            <NavLink to="/">Aragoge</NavLink>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <ul className="hidden md:flex flex-row gap-6">
          {links.map((link, index) => (
              <NavLink
                key={index}
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : " "}`
                }
              >
                {link}
              </NavLink>
          ))}
        </ul>

        {/* Botón y foto de perfil con dropdown */}
        <div className="flex items-center gap-4">
          {/* Avatar del perfil con dropdown */}
          <Menu isOpen={isProfileOpen}>
            <MenuButton as={Avatar} size="sm" cursor="pointer" onClick={toggleProfile} />
            <MenuList>
                <NavLink to="/profile">
                    <MenuItem onClick={closeProfile}>Profile</MenuItem>
                </NavLink>

                <NavLink to="/register">
                    <MenuItem onClick={closeProfile}>Logout</MenuItem>
                </NavLink>
            </MenuList>
          </Menu>
          {/* Botón para cambiar el tema */}
          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {/* Botón de hamburguesa para menú móvil */}
          <Button 
            size="sm" 
            aria-label="Open Menu" 
            display={{ base: "block", md: "none" }} 
            onClick={toggleMenu} 
            mr={2}
            borderRadius="md"
            variant="solid"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        </div>
      </nav>

      {/* Menú responsive */}
      <Box className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`/${link.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : " "}`
                }
                onClick={closeMenu}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </Box>
    </header>
  );
};
