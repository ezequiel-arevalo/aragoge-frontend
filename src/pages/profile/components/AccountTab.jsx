import { Box, Text, Input } from '@chakra-ui/react';

export const AccountTab = ({ userData }) => {
  return (
    <>
      <Box w={['100%', 'auto']} mb={4}> {/* 100% en móviles, auto en pantallas grandes */}
        <Text fontWeight="bold" mb={2}>Email</Text>
        <Input
          type="email"
          value={userData.email}
          readOnly
          borderColor="gray.300"
        />
      </Box>
      <Box w={['100%', 'auto']} mb={4}> {/* 100% en móviles */}
        <Text fontWeight="bold" mb={2}>Password</Text>
        <Input
          type="password"
          value={'******'}
          readOnly
          borderColor="gray.300"
        />
      </Box>
      <Box w={['100%', 'auto']}> {/* 100% en móviles */}
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