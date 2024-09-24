import { Input as ChakraInput, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

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
)};