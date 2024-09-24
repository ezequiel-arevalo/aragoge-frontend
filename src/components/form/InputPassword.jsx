import { Input as ChakraInput, InputGroup, InputRightElement, IconButton, FormControl, FormLabel, FormErrorMessage, useBoolean } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
)};