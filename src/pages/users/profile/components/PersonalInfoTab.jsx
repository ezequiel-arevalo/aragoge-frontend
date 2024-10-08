import { Stack, Box, Text, Input } from '@chakra-ui/react';

export const PersonalInfoTab = ({ formData, setFormData }) => {
  const handleFirstNameChange = (e) => {
    setFormData((prev) => ({ ...prev, first_name: e.target.value }));
  };

  const handleLastNameChange = (e) => {
    setFormData((prev) => ({ ...prev, last_name: e.target.value }));
  };

  return (
    <Stack direction={['column', 'row']} spacing={4}> {/* Cambiar a columna en móviles */}
      <Box flex={1} w={['100%', 'auto']}>
        <Text fontWeight="bold" mb={2}>First Name</Text>
        <Input
          type="text"
          value={formData.first_name}
          onChange={handleFirstNameChange}
          borderColor="gray.300"
        />
      </Box>
      <Box flex={1} w={['100%', 'auto']}>
        <Text fontWeight="bold" mb={2}>Last Name</Text>
        <Input
          type="text"
          value={formData.last_name}
          onChange={handleLastNameChange}
          borderColor="gray.300"
        />
      </Box>
    </Stack>
  );
};