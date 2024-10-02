import { Box, Text, Input } from '@chakra-ui/react';

export const AccountTab = ({ userData }) => {
  return (
    <>
      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Email</Text>
        <Input
          type="email"
          value={userData.email}
          readOnly
          borderColor="gray.300"
        />
      </Box>
      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Password</Text>
        <Input
          type="password"
          value={userData.password ? userData.password : 'Contraseña'}
          readOnly
          borderColor="gray.300"
        />
      </Box>
      <Box>
        <Text fontWeight="bold" mb={2}>Account Created</Text>
        <Input
          type="text"
          value={new Date(userData.created_at).toLocaleString()}
          readOnly
          borderColor="gray.300"
        />
      </Box>
    </>
  );
};
