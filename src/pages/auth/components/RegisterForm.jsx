import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/form/Input';

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      console.log('Datos del formulario:', data);
    };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        // Configuración inicial de la animación con framer-motion
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form
          // Maneja el envío del formulario utilizando react-hook-form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 rounded-md shadow-md w-full max-w-sm"
        >
          {/* Campo de entrada para el nombre de usuario */}
          <Input
            type="text"
            name="username"
            label="Nombre"
            register={register}
            errors={errors}
          />

          {/* Campo de entrada para el nombre de usuario */}
          <Input
            type="text"
            name="userlastname"
            label="Apellido"
            register={register}
            errors={errors}
          />

          {/* Campo de entrada para el correo electrónico */}
          <Input
            type="email"
            name="email"
            label="Correo Electrónico"
            register={register}
            errors={errors}
          />
          {/* Campo de entrada para la contraseña con funcionalidad de mostrar/ocultar */}
          <Input
            name="password"
            type="password"
            label="Contraseña"
            register={register}
            errors={errors}
          />
          {/* Botón de envío para registrar al usuario */}
          <button
            type="submit"
            className="w-full mt-4 bg-button-default-bg text-button-default-text hover:bg-button-hover-bg hover:text-button-hover-text active:bg-button-active-bg active:text-button-active-text py-2 px-4 rounded"
          >
            Registrarse
          </button>
          {/* Botón para navegar a la página de inicio de sesión si ya tiene una cuenta */}
          <span
            onClick={() => navigate('/login')}
            className="cursor-pointer mt-4 text-sm block hover:underline mx-auto text-center"
          >
            ¿Ya tienes cuenta? Inicia sesión aquí
          </span>
        </form>
      </motion.div>
    </div>
  )
}
