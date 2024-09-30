import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Definición de los colores
const colors = {
  light: {
    fondo: '#F2F2F2',
    texto: '#131211',
    contenedores: '#FFFFFF',
    aside: '#FFFFFF',
    img: '#EAEAEA',
    link: '#DA1641',
    button: {
      default: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    span: {
      default: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    link: {
      default: '#131211',
      hover: '#DA1641',
      active: '#C30D35',
    },
  },
};

// Estilos globales
const styles = {
  global: (props) => ({
    body: {
      bg: mode(colors.light.fondo)(props),
      color: mode(colors.light.texto)(props),
    },
    header: {
      bg: mode(colors.light.contenedores)(props),
    },
    footer: {
      bg: mode(colors.light.contenedores)(props),
    },
    form: {
      bg: mode(colors.light.contenedores)(props),
    },
    aside: {
      bg: mode(colors.light.contenedores)(props),
    },
    button: {
      bg: mode(colors.light.button.default.bg)(props),
      color: mode(colors.light.button.default.text)(props),
      '&:hover': {
        bg: mode(colors.light.button.hover.bg)(props),
        color: mode(colors.light.button.hover.text)(props),
      },
    },
    span: {
      color: mode(colors.light.span.default.bg)(props),
      '&:hover': {
        color: mode(colors.light.span.hover.bg)(props),
      },
    },
    a: {
      color: mode(colors.light.link.default)(props),
      '&:hover': {
        color: mode(colors.light.link.hover)(props),
      },
      '&:active': {
        color: mode(colors.light.link.active)(props),
      },
    },
    // Si hay botones con la clase `no-global-styles`, no se aplicarán los estilos globales
    'button.no-global-styles': {
      bg: 'transparent',  // Por ejemplo, puedes hacer que no tengan ningún fondo
      color: 'inherit',   // Inherita el color del contexto
      // Aquí puedes personalizar los estilos si quieres
    },
    // Si hay botones con la clase `no-global-styles`, no se aplicarán los estilos globales
    'span.no-global-styles': {
      bg: 'transparent',  // Por ejemplo, puedes hacer que no tengan ningún fondo
      color: 'inherit',   // Inherita el color del contexto
      // Aquí puedes personalizar los estilos si quieres
    },
  }),
};

// Configuración del tema
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Extender el tema
const theme = extendTheme({ colors, styles, config });

export default theme;