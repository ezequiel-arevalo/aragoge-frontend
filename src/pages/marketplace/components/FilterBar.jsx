import { motion } from 'framer-motion';
import { CategoryFilter } from './filters/CategoryFilter';
import { PriceFilter } from './filters/PriceFilter';

// Hacer animable el aside utilizando Framer Motion
const MotionAside = motion.create('aside'); 

export const FilterBar = () => {
  return (
    <MotionAside
      className="p-4"
      initial={{ opacity: 0, x: -100 }} // Estado inicial: opacidad 0, desplazado hacia la izquierda
      animate={{ opacity: 1, x: 0 }} // Animación final: aparece desde la izquierda hacia su posición original
      transition={{ duration: 0.6, ease: 'easeInOut' }} // Control de duración y suavizado
    >
      <h3 className="text-h3 font-semibold font-title">Filtros:</h3>
      <CategoryFilter />
      <PriceFilter />
    </MotionAside>
  );
};
