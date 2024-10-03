import { Box, Text, Input } from '@chakra-ui/react';

export const RoleTab = ({ userData }) => {
  return (
    <>
      <Box mb={4} w={['100%', 'auto']} >
        <Text fontWeight="bold" mb={2}>Role</Text>
        <Input
          type="text"
          value={userData.rol_name || 'No role assigned'}
          readOnly
          borderColor="gray.300"
        />
      </Box>
      <Box mb={4} w={['100%', 'auto']} >
        <Text fontWeight="bold" mb={2}>Role ID</Text>
        <Input
          type="text"
          value={userData.rol_id || 'No ID'}
          readOnly
          borderColor="gray.300"
        />
      </Box>
    </>
  );
};
