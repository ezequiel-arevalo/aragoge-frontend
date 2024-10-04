import { useState, useEffect } from 'react';
import { AiFillStar as Star, AiOutlineRight as ChevronRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Button, Input } from "@chakra-ui/react"; // Chakra para UI
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [email, setEmail] = useState('');
  const [counters, setCounters] = useState([0, 0, 0, 0]); // Estado para los contadores inicializados en 0

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo enviado:', email);
    setEmail('');
  };

  // Datos de los contadores
  const counterStats = [
    { label: "Productos Vendidos", icon: Star, value: 1200 },
    { label: "Usuarios Activos", icon: Star, value: 3000 },
    { label: "Reseñas", icon: Star, value: 500 },
    { label: "Socios", icon: Star, value: 200 }
  ];

  // Animación para los contadores
  useEffect(() => {
    const targetValues = counterStats.map(stat => stat.value); // Valores objetivo para cada contador
    const interval = setInterval(() => {
      setCounters(prevCounters => 
        prevCounters.map((counter, index) => 
          counter < targetValues[index] ? counter + Math.ceil(targetValues[index] / 100) : counter
        )
      );
    }, 30);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [counterStats]);

  // Variantes de animación para framer-motion
  const countUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F2F2F2] text-[#131211]">
      {/* 1. Sección de Héroe */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        <img
          src="https://placehold.co/600x400"
          alt="Entrenadores Deportivos"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="relative z-10 space-y-4 p-4">
          <h1 className="text-4xl md:text-6xl font-bold">Conecta con los Mejores Entrenadores Deportivos</h1>
          <p className="text-xl md:text-2xl">Logra tus metas con entrenadores especializados en boxeo, natación, fisicoculturismo y más.</p>
          <Button colorScheme='light' size="lg" aria-label="Encuentra tu entrenador">
            Encuentra tu Entrenador
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button colorScheme='light' variant="outline" className="text-[#DA1641] border-[#DA1641] hover:bg-[#DA1641] hover:text-white" size="lg" aria-label="Regístrate como profesional">
            Regístrate como Profesional
          </Button>
        </div>
      </section>

      {/* 2. Sección: ¿Cómo Funciona? */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">¿Cómo Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Paso 1</h3>
            <p>Encuentra un entrenador que se ajuste a tus necesidades.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Paso 2</h3>
            <p>Reserva una clase o un plan personalizado.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Paso 3</h3>
            <p>Empieza a mejorar tu rendimiento con un profesional.</p>
          </div>
        </div>
      </section>

      {/* 3. Sección: Entrenadores Destacados */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Entrenadores Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((trainer) => (
            <div key={trainer} className="bg-white rounded-lg shadow-md overflow-hidden" aria-label={`Entrenador destacado ${trainer}`}>
              <img
                src={`https://placehold.co/600x400?text=Entrenador+${trainer}`}
                alt={`Entrenador ${trainer}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Entrenador {trainer}</h3>
                <p className="text-[#131211]/70 mb-2">Especialidad: Boxeo</p>
                <Button colorScheme='light' variant="outline" size="sm" className="text-[#DA1641] border-[#DA1641] hover:bg-[#DA1641] hover:text-white">
                  Ver Perfil
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sección: Reseñas de Atletas */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Reseñas de Atletas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white rounded-lg shadow-md p-6" aria-label={`Reseña del atleta ${review}`}>
              <div className="flex items-center mb-4">
                <img
                  src={`https://placehold.co/50x50?text=User+${review}`}
                  alt={`Atleta ${review}`}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Atleta {review}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DA1641] text-[#DA1641]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#131211]/70">"¡Excelente entrenador, me ayudó a mejorar mis tiempos en natación!"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sección: Categorías Principales */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Explora por Deporte</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Boxeo', 'Natación', 'Fisicoculturismo', 'Running', 'CrossFit', 'Pilates'].map((categoria) => (
            <div key={categoria} className="bg-white rounded-lg shadow-md p-6 text-center" aria-label={`Categoría de deporte ${categoria}`}>
              <img src={`https://placehold.co/200x200?text=${categoria}`} alt={categoria} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{categoria}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Sección: Contadores (Counter Stats) */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Estadísticas Actuales</h2>
          <p className="text-center mb-8">Nuestro crecimiento y rendimiento en números:</p>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {counterStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial="initial"
                    animate="animate"
                    variants={countUpAnimation}
                  >
                    <stat.icon className="text-4xl md:text-5xl text-[#DA1641] mx-auto mb-2" />
                    <motion.span className="text-3xl md:text-4xl font-bold block">
                      {counters[index].toLocaleString()}
                    </motion.span>
                    <span className="text-lg text-gray-600">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* 7. Sección: Novedades y Consejos */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Novedades y Consejos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Beneficios de entrenar con un coach', 'Cómo elegir al entrenador adecuado', 'Tendencias deportivas'].map((articulo) => (
            <div key={articulo} className="bg-white rounded-lg shadow-md p-6" aria-label={`Artículo sobre ${articulo}`}>
              <h3 className="font-semibold text-lg mb-2">{articulo}</h3>
              <p className="text-[#131211]/70">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <Link to="/" className="text-[#DA1641] hover:underline">Leer más</Link>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Sección de Misión y Valores */}
      <section className="py-16 px-4 md:px-8 bg-[#F2F2F2]">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestra Misión</h2>
        <p className="text-center max-w-3xl mx-auto">
          En nuestro marketplace, nuestra misión es conectar a atletas con entrenadores especializados para ayudarlos a alcanzar su máximo potencial deportivo.
          Creemos en la importancia del entrenamiento personalizado y en la motivación constante de un profesional experimentado.
        </p>
      </section>

      {/* 9. Sección de Newsletter */}
      <section className="py-16 px-4 md:px-8 bg-[#DA1641] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro Newsletter</h2>
          <p className="mb-6">Recibe las últimas noticias y entrenadores destacados.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" aria-label="Formulario de suscripción">
            <Input
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white text-[#131211]"
              required
              aria-label="Campo para ingresar el email"
            />
            <Button type="submit" colorScheme='light' size="lg" aria-label="Botón para suscribirse al newsletter">
              Suscribirse
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};