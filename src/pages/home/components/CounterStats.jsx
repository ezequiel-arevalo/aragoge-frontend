import { motion } from 'framer-motion';
import { AiFillStar as Star } from 'react-icons/ai';
import { useState, useEffect } from 'react';

export const CounterStats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const counterStats = [
    { label: "Productos Vendidos", icon: Star, value: 1200 },
    { label: "Usuarios Activos", icon: Star, value: 3000 },
    { label: "Reseñas", icon: Star, value: 500 },
    { label: "Socios", icon: Star, value: 200 }
  ];

  useEffect(() => {
    const targetValues = counterStats.map(stat => stat.value);
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map((counter, index) =>
          counter < targetValues[index] ? counter + Math.ceil(targetValues[index] / 100) : counter
        )
      );
    }, 30);
    return () => clearInterval(interval);
  }, [counterStats]);

  const countUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
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
  );
};