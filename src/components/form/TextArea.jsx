import { Textarea as ChakraTextarea, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

export const Textarea = ({ register, name, errors, label, textareaProps = {}, disabled = false }) => {
    return (
      <FormControl isInvalid={!!errors[name]} className="mb-4">
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraTextarea
          disabled={disabled}
          id={name}
          {...register(name, { required: `El ${label} es obligatorio!` })}
          {...textareaProps}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md max-h-[300px]"
        />
        {errors[name] && <FormErrorMessage>{errors[name].message}</FormErrorMessage>}
      </FormControl>
    );
  };