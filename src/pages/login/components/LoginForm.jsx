import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUserAction } from '@/redux/user/userSlice'; // Importa la acción para login
import { Input } from '@/components/form/Input';
import { InputPassword } from '@/components/form/InputPassword';
import { useToast } from '@chakra-ui/react'; // Para el toast de éxito

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  
  const onSubmit = (data) => {
    console.log('Datos enviados al backend:', data); // Verifica los datos que se envían

    dispatch(loginUserAction(data))
      .then((response) => {
        if (response.payload.access_token) {
          const token = response.payload.access_token;
          console.log('Token recibido:', token); // Verifica el token recibido

          toast({
            title: 'Inicio de sesión exitoso.',
            description: 'Has iniciado sesión correctamente.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-right',
          });

          reset();
          navigate('/');  // Redirigir a la página principal o donde desees
        } else {
          throw new Error('No se recibió el token');
        }
      })
      .catch((err) => {
        console.error('Error durante el login:', err.message);
      });
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