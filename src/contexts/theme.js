import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// Definición de los colores
const colors = {
  light: {
    fondo: '#F2F2F2',
    texto: '#131211',
    contenedores: '#FFFFFF',
    span: '#595959',
    label: '#595959',
    imagenes: '#EAEAEA',
    button: {
      disabled: {
        bg: '#FFE3E9',
        text: '#FF6D8D',
      },
      default: {
        bg: '#F93A64',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      active: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    span: {
      disabled: {
        bg: '#FFE3E9',
        text: '#FF6D8D',
      },
      default: {
        bg: '#F93A64',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      active: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    link: {
      default: '#131211',
      hover: '#DA1641',
      active: '#C30D35',
      disabled: '#FFE3E9',
    },
  },
  dark: {
    fondo: '#131211',
    texto: '#FFFFFF',
    contenedores: '#1E1E1E',
    span: '#A6A6A6',
    label: '#A6A6A6',
    imagenes: '#2A2A2A',
    button: {
      disabled: {
        bg: '#FFE3E9',
        text: '#FF6D8D',
      },
      default: {
        bg: '#F93A64',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      active: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    span: {
      disabled: {
        bg: '#FFE3E9',
        text: '#FF6D8D',
      },
      default: {
        bg: '#F93A64',
        text: '#FFFFFF',
      },
      hover: {
        bg: '#DA1641',
        text: '#FFFFFF',
      },
      active: {
        bg: '#C30D35',
        text: '#FFFFFF',
      },
    },
    link: {
      default: '#FFFFFF',
      hover: '#DA1641',
      active: '#C30D35',
      disabled: '#FFE3E9',
    },
  },
};

// Estilos globales
const styles = {
  global: (props) => ({
    body: {
      bg: mode(colors.light.fondo, colors.dark.fondo)(props),
      color: mode(colors.light.texto, colors.dark.texto)(props),
    },
    header: {
      bg: mode(colors.light.contenedores, colors.dark.contenedores)(props),
    },
    footer: {
      bg: mode(colors.light.contenedores, colors.dark.contenedores)(props),
    },
    form: {
      bg: mode(colors.light.contenedores, colors.dark.contenedores)(props),
    },
    label: {
      color: mode(colors.light.label, colors.dark.label)(props),
    },
    span: {
      color: mode(colors.light.span.default.bg, colors.dark.span.default.bg)(props),
      '&:hover': {
        color: mode(colors.light.span.hover.bg, colors.dark.span.hover.bg)(props),
      },
      '&:active': {
        color: mode(colors.light.span.active.bg, colors.dark.span.active.bg)(props),
      },
      '&:disabled': {
        color: mode(colors.light.span.disabled.bg, colors.dark.span.disabled.bg)(props),
      },
    },
    a: {
      color: mode(colors.light.link.default, colors.dark.link.default)(props),
      '&:hover': {
        color: mode(colors.light.link.hover, colors.dark.link.hover)(props),
      },
      '&:active': {
        color: mode(colors.light.link.active, colors.dark.link.active)(props),
      },
      '&:disabled': {
        color: mode(colors.light.link.disabled, colors.dark.link.disabled)(props),
      },
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