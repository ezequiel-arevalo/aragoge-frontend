import { Button, useColorMode } from '@chakra-ui/react';

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};