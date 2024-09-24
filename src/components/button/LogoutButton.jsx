/**
 * @file LogoutButton.jsx
 * Componente para cerrar sesión en la aplicación, que utiliza Chakra UI para las notificaciones y react-redux para la gestión de estado.
 */

import { MenuItem } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from '@/redux/user/userSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import { useToast } from "@chakra-ui/react";

/**
 * Componente `LogoutButton` que maneja el cierre de sesión del usuario. 
 * Utiliza `react-redux` para despachar la acción de cierre de sesión, `react-router-dom` para la navegación y Chakra UI para mostrar toasts de notificación.
 * 
 * @component
 * @returns {JSX.Element} Botón de cierre de sesión que se integra en el menú de usuario.
 * 
 * @example
 * return (
 *   <LogoutButton />
 * )
 */
export const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  /**
   * Maneja el proceso de cierre de sesión del usuario.
   * Despacha la acción `logoutUserAction` y maneja las notificaciones de éxito o error.
   */
  const handleLogout = async () => {
    try {
      await dispatch(logoutUserAction()).unwrap();
      toast({
        title: "Cerraste sesión con éxito.",
        description: "Cerraste sesión correctamente.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error al cerrar sesión.",
        description: "Error desconocido",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  return (
    <MenuItem onClick={handleLogout} aria-label="Log out">
      <FaSignOutAlt className="mr-2" /> Logout
    </MenuItem>
  );
};