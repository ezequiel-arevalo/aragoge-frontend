import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { loginUserAction, registerNewUser } from '@/redux/user/userSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  // Función para manejar el login
  const login = async (userData, resetForm) => {
    try {
      const response = await dispatch(loginUserAction(userData)).unwrap();

      if (response.access_token) {
        toast({
          title: 'Inicio de sesión exitoso.',
          description: 'Has iniciado sesión correctamente.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });

        resetForm(); // Resetea el formulario después del login
        navigate('/'); // Redirige a la página de inicio
      } else {
        throw new Error('No se recibió el token');
      }
    } catch (err) {
      console.error('Error durante el login:', {err});
    }
  };

  const register = async (userData, resetForm) => {
    try {
      const response = await dispatch(registerNewUser(userData)).unwrap();
  
      // Manejar respuesta exitosa
      toast({
        title: 'Registro exitoso.',
        description: 'Te has registrado correctamente.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
  
      resetForm(); // Resetea el formulario después del registro
      navigate('/login'); // Redirige al login
    } catch (err) {
      // Si el registro falla, mostramos el mensaje de error en el toast
      toast({
        title: 'Error en el registro.',
        description: err || 'Ocurrió un error durante el registro.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
  
      console.error('Error en el registro:', err); // Verificar el error en la consola
    }
  };
  
  return { login, register };
};

export default useAuth;
