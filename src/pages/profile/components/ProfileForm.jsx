import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Box, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Badge, Select, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { getUserDetails } from '@/services/userService';
import { deleteUserAction, clearUserData, updateUserAction } from '@/redux/user/userSlice';

export const ProfileForm = () => {
  const dispatch = useDispatch(); // Para despachar acciones
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { user, accessToken } = useSelector((state) => ({
    user: state.user.user,
    accessToken: state.user.accessToken,
  }));

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && accessToken) {
          const data = await getUserDetails(user.id, accessToken);
          setUserData(data.data);
          setFirstName(data.data.first_name); // Inicializar el estado
          setLastName(data.data.last_name); // Inicializar el estado
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUserData();
  }, [user, accessToken]);

  const handleDeleteAccount = async () => {
    try {
      await dispatch(deleteUserAction()).unwrap(); // Maneja la acción de eliminar usuario
      dispatch(clearUserData()); // Limpia los datos del usuario en el estado
      console.info('Cuenta eliminada exitosamente.');
    } catch (err) {
      console.error(`Error al eliminar cuenta: ${err}`);
    }
  };

  const handleUpdateUser = async () => {
    try {
        const updatedData = { first_name: firstName, last_name: lastName };
        const result = await dispatch(updateUserAction(updatedData)).unwrap(); // Desenvuelve para obtener la respuesta
        console.info('Datos actualizados exitosamente.');
        console.info(result); // Para ver la respuesta del servidor
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
    <Box maxW="800px" mx="auto" bg="white" p={8} rounded="lg" shadow="md">
      {/* Header Section */}
      <Stack align="center" mb={6} spacing={4}>
        <Avatar size="2xl" name={`${firstName} ${lastName}`} _hover={{color: 'white'}}/>
        <Text fontSize="3xl" fontWeight="bold">
          {`${firstName} ${lastName}`}
        </Text>
        <Badge colorScheme="green" rounded="full" px={4} py={1}>
          {userData.rol_name}
        </Badge>
      </Stack>

      {/* Tabs Section */}
      <Tabs variant="soft-rounded" colorScheme="gray">
        <TabList justifyContent="center" mb={6}>
          <Tab className='no-global-styles'>Personal</Tab>
          <Tab className='no-global-styles'>Account</Tab>
          <Tab className='no-global-styles'>Security</Tab>
          <Tab className='no-global-styles'>Role</Tab>
          <Tab className='no-global-styles'>Preferences</Tab>
        </TabList>

        <TabPanels>
          {/* Personal Tab */}
          <TabPanel>
            <Stack direction="row" spacing={4} align="center">
                <Box flex={1}>
                <Text fontWeight="bold" mb={2} textAlign="left">
                    First Name
                </Text>
                <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    borderColor="gray.300"
                />
                </Box>
                <Box flex={1}>
                <Text fontWeight="bold" mb={2} textAlign="left">
                    Last Name
                </Text>
                <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    borderColor="gray.300"
                />
                </Box>
            </Stack>

            <Stack direction="row" spacing={4} align="center">
                <Box flex={1}>
                <Text fontWeight="bold" mt={4} textAlign="left">
                    Location
                </Text>
                <Select defaultValue="Argentina" borderColor="gray.300" borderRadius="md">
                    <option value="Argentina">Argentina</option>
                    <option value="Mexico">Mexico</option>
                    <option value="United States">United States</option>
                </Select>
                </Box>
            </Stack>
            </TabPanel>


          {/* Account Tab */}
          <TabPanel>
            <Box mb={4}>
              <Text fontWeight="bold" mb={2}>
                Email
              </Text>
              <Input
                type="email"
                value={userData.email}
                readOnly
                borderColor="gray.300"
              />
            </Box>
            <Box mb={4}>
              <Text fontWeight="bold" mb={2}>
                Password
              </Text>
              <Input
                type="password"
                value="asd"
                readOnly
                borderColor="gray.300"
              />
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Account Created
              </Text>
              <Input
                type="text"
                value={new Date(userData.created_at).toLocaleString()}
                readOnly
                borderColor="gray.300"
              />
            </Box>
          </TabPanel>

          {/* Security Tab */}
          <TabPanel>
            <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={4}>
              <AlertIcon boxSize='40px' />
              <AlertTitle mt={4} mb={1} fontSize='lg'>
                ¡Cuidado!
              </AlertTitle>
              <AlertDescription maxWidth='sm'>
                Al eliminar tu cuenta, perderás permanentemente todos tus datos y no podrás recuperarlos.
                ¿Estás seguro de que deseas continuar?
              </AlertDescription>
            </Alert>
            <Button colorScheme="red" onClick={handleDeleteAccount} mt={4}>
              Eliminar Cuenta
            </Button>
          </TabPanel>

          {/* Role Tab */}
          <TabPanel>
            <Box mb={4}>
              <Text fontWeight="bold" mb={2}>
                Role
              </Text>
              <Input
                type="text"
                value={userData.rol_name || 'No role assigned'}
                readOnly
                borderColor="gray.300"
              />
            </Box>
            <Box>
              <Text fontWeight="bold" mb={2}>
                Role ID
              </Text>
              <Input
                type="text"
                value={userData.rol_id || 'No ID'}
                readOnly
                borderColor="gray.300"
              />
            </Box>
          </TabPanel>

          {/* Preferences Tab */}
          <TabPanel>
            <Text fontWeight="bold" mb={2}>
              Preferences section coming soon.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Save Button */}
      <Button className='w-full py-2' colorScheme="light" mt={4} onClick={handleUpdateUser}>
        Save Changes
      </Button>
    </Box>
  );
};