import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Importa Framer Motion
import { useForm } from 'react-hook-form';
import Input from '@/components/form/Input'; // Asegúrate de importar correctamente tu Input
import { Textarea } from '@/components/form/TextArea';

const MotionBox = motion.create(Box);

export const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      className="shadow-lg rounded-lg"
    >
      <Text fontSize="4xl" mb={4}>Contact Page</Text>

      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="space-y-4 w-full max-w-md"
      >
        <Input
          type="email"
          name="email"
          label="Correo Electrónico"
          register={register}
          errors={errors}
        />

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
