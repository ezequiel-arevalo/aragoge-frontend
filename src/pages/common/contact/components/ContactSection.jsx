import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useUserData } from '@/hooks/useUserData';
import { Input } from '@/components/form/Input';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const { user, accessToken } = useSelector((state) => ({
    user: state.user.user,
    accessToken: state.user.accessToken,
  }));

  const { userData } = useUserData(user, accessToken);

  useEffect(() => {
    if (userData) {
      setValue('name', `${userData.first_name} ${userData.last_name}`, { shouldValidate: true });
      setValue('email', userData.email, { shouldValidate: true });
    }
  }, [userData, setValue]);

  const onSubmit = (data) => {
    // Simulación de envío de formulario (aquí iría la llamada a la API)
    setTimeout(() => {
      setSubmitted(true);
      // Reiniciar el formulario, pero mantener nombre y correo si el usuario está logueado
      reset({
        name: userData ? `${userData.first_name} ${userData.last_name}` : '',
        email: userData ? userData.email : '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000); // Ocultar mensaje de agradecimiento
    }, 1500);
  };

  return (
    <section className="w-full">
      <div className="bg-gradient-to-r from-[#da1641] to-[#ff6b6b] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl mb-8">¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Nombre"
                name="name"
                type="text"
                register={register}
                errors={errors}
                disabled={!!userData}
              />
              <Input
                label="Correo electrónico"
                name="email"
                type="email"
                register={register}
                errors={errors}
                disabled={!!userData}
              />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-left ">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#da1641] focus:border-transparent"
                  placeholder="Tu mensaje aquí..."
                  {...register("message", { required: "El mensaje es requerido" })}
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#da1641] hover:bg-[#b81235] focus:outline-none"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar mensaje
                </motion.button>
              </div>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
              >
                ¡Gracias por tu mensaje! Te responderemos pronto.
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};