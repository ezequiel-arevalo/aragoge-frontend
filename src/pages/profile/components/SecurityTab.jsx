import { Box, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

export const SecurityTab = ({ onDelete }) => {
  return (
    <Box>
      <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" mt={4}>
        <AlertIcon boxSize="40px" />
        <AlertTitle mt={4} mb={1} fontSize="lg">¡Cuidado!</AlertTitle>
        <AlertDescription maxWidth="sm">
          Al eliminar tu cuenta, perderás permanentemente todos tus datos y no podrás recuperarlos.
          ¿Estás seguro de que deseas continuar?
        </AlertDescription>
      </Alert>
      <Button colorScheme="red" onClick={onDelete} mt={4}>
        Eliminar Cuenta
      </Button>
    </Box>
  );
};
