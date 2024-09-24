import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '@/redux/user/userSlice';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/form/Input';
import { InputPassword } from '@/components/form/InputPassword';

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    criteriaMode: 'all',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const { loading } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    const userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };

    dispatch(registerNewUser(userData))
      .then((response) => {
        if (!response.error) {
          toast({
            title: 'Registro exitoso.',
            description: 'Te has registrado correctamente.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right',
          });
          reset();
          navigate('/login');
        } else {
          throw new Error(response.error.message || 'Error en el registro');
        }
      })
      .catch((err) => {
        console.error('Error en el registro:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-md shadow-md w-full max-w-sm flex flex-col">
      
      {/* Input de Nombre */}
      <Input
        name="first_name"
        label="Nombre"
        type="text"
        register={register}
        errors={errors}
      />

      {/* Input de Apellido */}
      <Input
        name="last_name"
        label="Apellido"
        type="text"
        register={register}
        errors={errors}
      />

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
        disabled={loading}
      >
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>

      <span
        onClick={() => navigate('/login')}
        className="cursor-pointer mt-4 text-sm block hover:underline mx-auto text-center"
      >
        ¿Ya tienes cuenta? Inicia sesión aquí
      </span>
    </form>
  );
};
