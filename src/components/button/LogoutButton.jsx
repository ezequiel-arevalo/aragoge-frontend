import { MenuItem } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logoutUserAction } from '@/redux/user/userSlice';
import { FaSignOutAlt } from 'react-icons/fa';
import { useToast } from "@chakra-ui/react";

export const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

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
      navigate("/"); // Redirigir a la página de registro
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