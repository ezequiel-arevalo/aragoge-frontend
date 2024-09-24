/**
 * @file Input.jsx
 * Componente personalizado de input que utiliza Chakra UI y react-hook-form para gestionar formularios con validación.
 */

import { Input as ChakraInput, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

/**
 * Componente `Input` personalizado que combina Chakra UI con `react-hook-form` para crear inputs de formulario con validación y estilos personalizados.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.register - Función de `react-hook-form` para registrar el campo de formulario.
 * @param {string} props.name - El nombre del campo de input.
 * @param {Object} props.errors - Objeto de errores proveniente de `react-hook-form`.
 * @param {string} [props.label] - Etiqueta para el campo de input.
 * @param {string} [props.type='text'] - Tipo de input (e.g., 'text', 'password', etc.).
 * @param {Object} [props.inputProps={}] - Propiedades adicionales para el campo de input.
 * @param {boolean} [props.disabled=false] - Indica si el campo de input está deshabilitado.
 * 
 * @returns {JSX.Element} El componente de input personalizado.
 * 
 * @example
 * return (
 *   <Input 
 *     register={register} 
 *     name="username" 
 *     errors={errors} 
 *     label="Username" 
 *   />
 * )
 */
export const Input = ({ register, name, errors, label, type = 'text', inputProps = {}, disabled = false }) => {
  return (
    <FormControl isInvalid={!!errors[name]} className="mb-4">
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        disabled={disabled}
        type={type}
        id={name}
        {...register(name, { required: `${label} es obligatorio!` })}
        {...inputProps}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      {errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
    </FormControl>
  );
};