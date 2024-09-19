import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUserAction } from '@/redux/user/userSlice'; // Importa la acción para login

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  
  // Accedemos al token desde Redux (opcional, si lo necesitas en el componente)
  const accessToken = useSelector((state) => state.user.accessToken);

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

        toast({
          title: 'Error en el inicio de sesión.',
          description: err.message || 'Hubo un problema con el login.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 rounded-md shadow-md w-full max-w-sm"
    >
      <div className='flex flex-col items-start my-3'>
        <label htmlFor="email">Email: </label>
        <input
          className='w-full p-2'
          type="email"
          name="email"
          id="email"
          {...register('email', { required: 'Este campo es obligatorio' })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className='flex flex-col items-start my-3'>
        <label htmlFor="password">Password: </label>
        <input
          className='w-full p-2'
          type="password"
          name="password"
          id="password"
          {...register('password', { required: 'Este campo es obligatorio' })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>
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