import { useForm } from 'react-hook-form';
import { Input } from '@/components/form/Input';
import { InputPassword } from '@/components/form/InputPassword';
import useAuth from '@/hooks/useAuth';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { login } = useAuth();
  
  const onSubmit = (data) => {
    login(data, reset);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 rounded-md shadow-md w-full max-w-sm"
    >
      {/* Input de Email */}
      <Input
        name="email"
        label="Email"
        type="email"
        register={register}
        errors={errors}
      />

      {/* Input de Contraseña */}
      <InputPassword
        name="password"
        label="Password"
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
        className="cursor-pointer mt-4 text-sm block hover:underline mx-auto text-center"
      >
        ¿No tienes cuenta? Regístrate aquí
      </span>
    </form>
  );
};
