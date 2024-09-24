/**
 * @file Footer.jsx
 * Componente `Footer` que representa el pie de página de la aplicación.
 * Muestra el año actual y el nombre del sitio junto con un mensaje de derechos reservados.
 */

import { ThisYear } from '@/utilities';

/**
 * Componente `Footer` que renderiza el pie de página de la aplicación.
 * 
 * Muestra el año actual (usando el componente `ThisYear`) y un mensaje de derechos reservados.
 * 
 * @component
 * @example
 * return <Footer />
 * 
 * @returns {JSX.Element} El componente del pie de página.
 */
export const Footer = () => {
  return (
    <footer className='text-center w-full'>
      <p className='text-p font-text py-2'>
        © <ThisYear /> Aragoge. All rights reserved.
      </p>
    </footer>
  );
};