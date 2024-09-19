import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, useBoolean, useColorMode, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '@/redux/user/userSlice';

export const Header = () => {
  const [isMenuOpen, { toggle: toggleMenu, off: closeMenu }] = useBoolean();
  const [isProfileOpen, { toggle: toggleProfile, off: closeProfile }] = useBoolean();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Seleccionar si hay usuario logueado

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserAction()).unwrap(); // Llamar la acción de logout
      toast({
        title: "Cerraste sesión con éxito.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/register"); // Redirigir a la página de registro
    } catch (error) {
      toast({
        title: "Error al cerrar sesión.",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <header className="w-full p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center max-w-[1440px]">
        <div className="flex items-center">
          <div className="text-lg font-bold">
            <NavLink to="/">Aragoge</NavLink>
          </div>
        </div>

        <ul className="hidden md:flex flex-row gap-6">
          <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>Home</NavLink>
          <NavLink to="/marketplace" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>Marketplace</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>Contact</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>profile</NavLink>

          {/* Mostrar Login/Register solo si no está logueado */}
          {!user && (
            <>
              <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>Login</NavLink>
              <NavLink to="/register" className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>Register</NavLink>
            </>
          )}
        </ul>

        <div className="flex items-center gap-4">
          {user && (
            <Menu isOpen={isProfileOpen}>
              <MenuButton as={Avatar} size="sm" cursor="pointer" onClick={toggleProfile} />
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}

          <Button size="sm" onClick={toggleColorMode}>
            {colorMode === "light" ? 'Luna icon' : 'Sol icon'}
          </Button>

          <Button size="sm" onClick={toggleMenu} mr={2}>
            {isMenuOpen ? 'Cerrar' : 'Menu'}
          </Button>
        </div>
      </nav>
    </header>
  );
};
