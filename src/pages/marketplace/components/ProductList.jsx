import { SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Importar framer-motion
import { ProductCard } from './card/ProductCard';

// Datos de ejemplo para las tarjetas de productos
const products = [
  {
    id: 1,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 2,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 3,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 4,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 5,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 6,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
  {
    id: 7,
    title: 'Ergonomic Desk Chair',
    author: 'John Doe',
    price: 199.99,
    image: 'https://placehold.co/600x400',
  },
];

// Crear el contenedor de animación con framer-motion
const MotionSimpleGrid = motion.create(SimpleGrid); // Hacer animable el SimpleGrid

export const ProductList = () => {
  return (
    <MotionSimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4}} // Distribución de columnas
      spacing={4} // Espaciado entre las tarjetas
      initial={{ opacity: 0, x: 100 }} // Estado inicial: opacidad 0, desplazadas hacia la derecha
      animate={{ opacity: 1, x: 0 }} // Animación final: se mueven a su posición y se hacen visibles
      transition={{ duration: 0.6, ease: 'easeInOut' }} // Control de duración y suavizado
    >
      {/* Mapeo de los productos y renderizado de las tarjetas */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </MotionSimpleGrid>
  );
};
