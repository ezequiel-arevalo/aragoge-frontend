/**
 * @file ToggleThemeButton.jsx
 * Componente para alternar entre el modo claro y oscuro utilizando Chakra UI.
 */

import { Button, useColorMode } from '@chakra-ui/react';

/**
 * Componente `ToggleThemeButton` que permite a los usuarios alternar entre el modo claro y oscuro.
 * Utiliza el hook `useColorMode` de Chakra UI para gestionar el estado del color.
 * 
 * @component
 * @returns {JSX.Element} Un botón que cambia el modo de color de la aplicación entre claro y oscuro.
 * 
 * @example
 * return (
 *   <ToggleThemeButton />
 * )
 */
export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};