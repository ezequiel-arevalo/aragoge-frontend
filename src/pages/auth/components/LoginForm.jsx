import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/form/Input';

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
  
    const onSubmit = (data) => {
      console.log('Datos del formulario:', data);
    };

  return (
    <motion.div  
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-md shadow-md w-full max-w-sm"
      >
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
          Iniciar Sesión
        </button>
        <span
          onClick={() => navigate('/register')}
          className="cursor-pointer mt-4 text-sm block hover:underline mx-auto text-center">
          ¿No tienes cuenta? Regístrate aquí
        </span>
      </form>
    </div>
  </motion.div>
  )
}
