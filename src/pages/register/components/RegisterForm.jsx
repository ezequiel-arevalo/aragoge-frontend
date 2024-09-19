import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '@/redux/user/userSlice';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm({
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
        toast({
          title: 'Error en el registro.',
          description: 'Hubo un problema con el registro.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right',
        });
      });
  };

  // Mostrar los errores en un toast y establecer el focus en el campo con error
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0]; // Obtener el primer campo que falla
      const errorMessage = errors[firstErrorField].message;

      // Muestra el toast con el mensaje del campo específico
      toast({
        title: 'Error en el formulario',
        description: `${errors[firstErrorField]?.ref?.name.charAt(0).toUpperCase() + errors[firstErrorField]?.ref?.name.slice(1)}: ${errorMessage}`,
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'bottom-right',
      });

      // Establecer el focus en el campo que tiene el error
      setFocus(firstErrorField);
    }
  }, [errors, setFocus, toast]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-md shadow-md w-full max-w-sm flex flex-col">
      <div className='flex flex-col items-start my-3'>
        <label htmlFor="first_name">Nombre: </label>
        <input
          className={`w-full p-2 ${errors.first_name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          type="text"
          name="first_name"
          id="first_name"
          {...register('first_name', { required: 'El campo Nombre es obligatorio' })}
        />
      </div>

      <div className='flex flex-col items-start my-3'>
        <label htmlFor="last_name">Apellido: </label>
        <input
          className={`w-full p-2 ${errors.last_name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          type="text"
          name="last_name"
          id="last_name"
          {...register('last_name', { required: 'El campo Apellido es obligatorio' })}
        />
      </div>

      <div className='flex flex-col items-start my-3'>
        <label htmlFor="email">Email: </label>
        <input
          className={`w-full p-2 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          type="email"
          name="email"
          id="email"
          {...register('email', {
            required: 'El campo Email es obligatorio',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Correo electrónico inválido',
            },
          })}
        />
      </div>

      <div className='flex flex-col items-start my-3'>
        <label htmlFor="password">Password: </label>
        <input
          className={`w-full p-2 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          type="password"
          name="password"
          id="password"
          {...register('password', {
            required: 'El campo Contraseña es obligatorio',
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              message: 'Debe contener mayúsculas, minúsculas y números',
            },
          })}
        />
      </div>

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
