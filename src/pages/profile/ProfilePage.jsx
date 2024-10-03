import { Box, Text, Stack, Avatar, Badge, useToast } from '@chakra-ui/react';
import { useUserData } from '@/hooks/useUserData';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAction } from '@/redux/user/userSlice';
import { ProfileTabs } from './components/ProfileTabs';
import { useState, useEffect } from 'react';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const toast = useToast(); // Hook para mostrar los toasts

  const { user, accessToken } = useSelector((state) => ({
    user: state.user.user,
    accessToken: state.user.accessToken,
  }));

  const { userData, error } = useUserData(user, accessToken);

  // Estado local para manejar los cambios del formulario
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: ''
  });

  // Actualiza formData cuando userData esté disponible
  useEffect(() => {
    if (userData) {
      setFormData({
        first_name: userData.first_name,
        last_name: userData.last_name
      });
    }
  }, [userData]);

  // Función para manejar la actualización del usuario
  const handleUpdateUser = async (formData) => {
    try {
      await dispatch(updateUserAction(formData)).unwrap();
      toast({
        title: 'Actualización exitosa',
        description: 'Tus datos han sido actualizados correctamente.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });
    } catch (err) {
      toast({
        title: 'Error al actualizar',
        description: err.message || 'Ocurrió un error al actualizar tus datos.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    }
  };

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  if (!userData) {
    return <Text>Cargando datos...</Text>;
  }

  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Profile Page</h2>
      <Box maxW="800px" mx="auto" bg="white" p={3} rounded="lg" shadow="md">
        {/* Sección de la cabecera con Avatar y nombre */}
        <Stack align="center" mb={6} spacing={4}>
          <Avatar size="2xl" name={`${formData.first_name} ${formData.last_name}`} />
          <Text fontSize="3xl" fontWeight="bold">
            {`${formData.first_name} ${formData.last_name}`}
          </Text>
          <Badge colorScheme="green" rounded="full" px={4} py={1}>
            {userData.rol_name || 'No role assigned'}
          </Badge>
        </Stack>

        {/* Componente de las pestañas del perfil */}
        <ProfileTabs userData={userData} formData={formData} setFormData={setFormData} onSave={handleUpdateUser} />
      </Box>
    </section>
  );
};