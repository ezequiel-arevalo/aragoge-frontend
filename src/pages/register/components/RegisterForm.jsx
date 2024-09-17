import { Box, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/index';

const MotionBox = motion.create(Box);

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const toast = useToast(); // Hook para el toast
  
  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);

    // Mostrar toast de confirmación
    toast({
      title: 'Registro exitoso.',
      description: 'Te has registrado correctamente.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'bottom-right',
    });

    // Limpiar el formulario
    reset();
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 rounded-md shadow-md w-full max-w-sm"
        >
          <Input
            type="text"
            name="username"
            label="Nombre"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            name="userlastname"
            label="Apellido"
            register={register}
            errors={errors}
          />
          <Input
            type="email"
            name="email"
            label="Correo Electrónico"
            register={register}
            errors={errors}
          />
          <Input
            name="password"
            type="password"
            label="Contraseña"
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className="w-full mt-4 bg-button-default-bg text-button-default-text hover:bg-button-hover-bg hover:text-button-hover-text active:bg-button-active-bg active:text-button-active-text py-2 px-4 rounded"
          >
            Registrarse
          </button>
          <span
            onClick={() => navigate('/login')}
            className="cursor-pointer mt-4 text-sm block hover:underline mx-auto text-center"
          >
            ¿Ya tienes cuenta? Inicia sesión aquí
          </span>
        </form>
        </MotionBox>
  );
};
