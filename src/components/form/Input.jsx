import { Input as ChakraInput, InputGroup, InputRightElement, IconButton, FormControl, FormLabel, FormErrorMessage, useBoolean } from '@chakra-ui/react';

export const Input = ({ register, name, errors, label, type = 'text', inputProps = {}, disabled = false }) => {
  // Usamos el hook useBoolean de Chakra UI para manejar la visibilidad de la contraseña
  const [isPasswordVisible, setIsPasswordVisible] = useBoolean();

  return (
    <FormControl isInvalid={!!errors[name]} className="mb-4">
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        <ChakraInput
          disabled={disabled}
          type={type === 'password' && isPasswordVisible ? 'text' : type}
          id={name}
          {...register(name, { required: `${label} es obligatorio!` })}
          {...inputProps}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {/* Mostrar el icono de ojo solo si el input es de tipo password */}
        {type === 'password' && (
          <InputRightElement>
            <IconButton
              onClick={setIsPasswordVisible.toggle} // Usamos la función toggle de useBoolean
              icon={isPasswordVisible ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
              variant="ghost"
              size="sm"
              aria-label={isPasswordVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
    </FormControl>
  );
};

export default Input;
