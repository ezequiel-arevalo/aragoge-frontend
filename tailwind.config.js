/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores para el tema claro
        'light-fondo': '#F2F2F2',
        'light-texto': '#131211',
        'light-contenedores': '#FFFFFF',
        'light-span': '#595959',
        'light-imagenes': '#EAEAEA',

        // Colores para el tema oscuro
        'dark-fondo': '#131211',
        'dark-texto': '#FFFFFF',
        'dark-contenedores': '#1E1E1E',
        'dark-span': '#A6A6A6',
        'dark-imagenes': '#2A2A2A',

        // Colores para el botón deshabilitado
        'button-disabled-bg': '#FFE3E9',
        'button-disabled-text': '#FF6D8D',

        // Colores para el botón por defecto
        'button-default-bg': '#F93A64',
        'button-default-text': '#FFFFFF',

        // Colores para el botón al pasar el cursor (hover)
        'button-hover-bg': '#DA1641',
        'button-hover-text': '#FFFFFF',

        // Colores para el botón activo
        'button-active-bg': '#C30D35',
        'button-active-text': '#FFFFFF',

        // Colores para los enlaces
        'link-disabled': '#FFE3E9',
        'link-default': '#F93A64',
        'link-hover': '#DA1641',
        'link-active': '#C30D35',
      },
      fontFamily: {
        'font-title': ['Roboto', 'sans-serif'],  // Fuente para títulos
        'font-text': ['Cardo', 'serif'],        // Fuente para texto principal
      },
      fontSize: {
        h1: ['2.5rem', { lineHeight: '1.2' }],
        h2: ['2rem', { lineHeight: '1.3' }],
        h3: ['1.75rem', { lineHeight: '1.4' }],
        h4: ['1.5rem', { lineHeight: '1.5' }],
        h5: ['1.25rem', { lineHeight: '1.6' }],
        h6: ['1rem', { lineHeight: '1.6' }],
        p: ['1rem', { lineHeight: '1.7' }],
        span: ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [
    // Plugin para aplicar estilos globales
    function({ addComponents }) {
      addComponents({
        'a:disabled': {
          color: '#FFE3E9',
        },
        'a': {
          color: '#F93A64',
          '&:hover': {
            color: '#DA1641',
          },
          '&:active': {
            color: '#C30D35',
          },
        },
      });
    },
  ],
}
