import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Button, Text, useColorModeValue } from '@chakra-ui/react';

export const ProductCard = ({
  product,
  bg = { light: '#FFFFFF', dark: '#1E1E1E' }, // Valores predeterminados para bg
  color = { light: '#131211', dark: '#FFFFFF' } // Valores predeterminados para color
}) => {
  const { title, author, price, image, category } = product;
  const [isFavorite, setIsFavorite] = useState(false); // Estado para manejar favorito

  // Obtener colores basados en el modo de color
  const cardBg = useColorModeValue(bg.light, bg.dark);
  const cardColor = useColorModeValue(color.light, color.dark);

  return (
    <Box
      bg={cardBg}
      color={cardColor}
      className="rounded-lg shadow-md"
      p={4}
      maxW="sm"
    >
      {/* Imagen del producto */}
      <Box className="relative">
        <Image
          src={image} // Imagen del producto
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        {/* Categoría en la esquina superior izquierda */}
        <Box
          className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full"
          bg="gray.200"
          color="gray.700"
        >
          {category}
        </Box>
      </Box>

      {/* Contenido debajo de la imagen */}
      <Box className="mt-4">
        {/* Título y añadir a favoritos */}
        <Box className="flex justify-between items-center mb-2">
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Button
            className={`text-2xl ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <i className={`fa-solid fa-heart ${isFavorite ? '' : 'fa-regular'}`}></i>
          </Button>
        </Box>

        {/* Detalles del producto */}
        <Box className="flex flex-col items-start mb-4">
          <Text className="mr-2 cursor-pointer">{author}</Text>
          <Text className="text-xl mb-2">${price}</Text>
        </Box>

        {/* Botón de Ver Información */}
        <Link to={`/product/${title}`}>
          <Button className="w-full text-white">
            View Details
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
