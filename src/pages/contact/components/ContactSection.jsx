import { Box, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Input, Textarea} from '@/components/index'; // Cambié para usar input nativo
import { useState } from 'react';

const MotionBox = motion.create(Box);

export const ContactSection = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    // Simulamos el envío del formulario (podrías reemplazar esto con una llamada real a un API)
    setTimeout(() => {
      setLoading(false);
      reset(); // Limpiar el formulario después de enviar
      toast({
        title: 'Formulario enviado.',
        description: 'Tu mensaje ha sido enviado correctamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    }, 1500);
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
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="space-y-4 w-full max-w-3xl p-10"
      >
        <Input
          type="text"
          name="subject"
          label="Asunto"
          register={register}
          errors={errors}
        />

        <Textarea
          name="message"
          label="Mensaje"
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          className="w-full mt-4 bg-button-default-bg text-button-default-text hover:bg-button-hover-bg hover:text-button-hover-text active:bg-button-active-bg active:text-button-active-text py-2 px-4 rounded"
        >
          Enviar
        </button>
      </Box>
    </MotionBox>
  );
};