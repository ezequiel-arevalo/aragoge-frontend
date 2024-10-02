import { Box, Text, Stack, Avatar, Badge } from '@chakra-ui/react';
import { useUserData } from '@/hooks/useUserData';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserAction } from '@/redux/user/userSlice';
import { ProfileTabs } from './components/ProfileTabs';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector((state) => ({
    user: state.user.user,
    accessToken: state.user.accessToken,
  }));

  const { userData, error } = useUserData(user, accessToken);

  const handleUpdateUser = async (formData) => {
    try {
      await dispatch(updateUserAction(formData)).unwrap();
      console.info('Datos actualizados exitosamente.');
    } catch (err) {
      console.error(`Error al actualizar datos: ${err}`);
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
      <Box maxW="800px" mx="auto" bg="white" p={8} rounded="lg" shadow="md">
        {/* Sección de la cabecera con Avatar y nombre */}
        <Stack align="center" mb={6} spacing={4}>
          <Avatar size="2xl" name={`${userData.first_name} ${userData.last_name}`} />
          <Text fontSize="3xl" fontWeight="bold">
            {`${userData.first_name} ${userData.last_name}`}
          </Text>
          <Badge colorScheme="green" rounded="full" px={4} py={1}>
            Online
          </Badge>
        </Stack>

        {/* Componente de las pestañas del perfil */}
        <ProfileTabs userData={userData} onSave={handleUpdateUser} />
      </Box>
    </section>
  );
};