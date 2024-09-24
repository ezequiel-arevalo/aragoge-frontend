/**
 * @file InputPassword.jsx
 * Componente personalizado de entrada de contraseña que utiliza Chakra UI, `react-hook-form` y un botón para alternar la visibilidad de la contraseña.
 */

import { Input as ChakraInput, InputGroup, InputRightElement, IconButton, FormControl, FormLabel, FormErrorMessage, useBoolean } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/**
 * Componente `InputPassword` personalizado que permite a los usuarios alternar la visibilidad de su contraseña.
 * Utiliza Chakra UI para los estilos y `react-hook-form` para la validación del formulario.
 * 
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Function} props.register - Función de `react-hook-form` para registrar el campo de formulario.
 * @param {string} props.name - El nombre del campo de entrada.
 * @param {Object} props.errors - Objeto de errores proveniente de `react-hook-form`.
 * @param {string} [props.label] - Etiqueta para el campo de entrada.
 * @param {Object} [props.inputProps={}] - Propiedades adicionales para el campo de entrada.
 * @param {boolean} [props.disabled=false] - Indica si el campo de entrada está deshabilitado.
 * 
 * @returns {JSX.Element} El componente de entrada de contraseña personalizado con la funcionalidad de mostrar u ocultar la contraseña.
 * 
 * @example
 * return (
 *   <InputPassword 
 *     register={register} 
 *     name="password" 
 *     errors={errors} 
 *     label="Contraseña" 
 *   />
 * )
 */
export const InputPassword = ({ register, name, errors, label, inputProps = {}, disabled = false }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useBoolean();

  return (
    <FormControl isInvalid={!!errors[name]} className="mb-4">
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput
          disabled={disabled}
          type={isPasswordVisible ? 'text' : 'password'}
          id={name}
          {...register(name, { required: `${label} es obligatorio!` })}
          {...inputProps}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <InputRightElement>
          <IconButton
            onClick={setIsPasswordVisible.toggle}
            icon={isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            variant="ghost"
            size="sm"
            aria-label={isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          />
        </InputRightElement>
      </InputGroup>
      {errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
    </FormControl>
  );
};