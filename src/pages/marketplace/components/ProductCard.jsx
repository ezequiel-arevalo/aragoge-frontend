import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Box
      p={4}
      shadow="lg"
      rounded="md"
      className="transition-all transform hover:scale-105"
    >
      <Image
        src='https://via.placeholder.com/250'
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <Text fontWeight="bold" fontSize="lg">
        {product.name}
      </Text>
      <Text fontSize="md">
        {product.category}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        ${product.price}
      </Text>
      <Link to={`/planning/${product.id}`}>
        <Button mt={4}>
          View Details
        </Button>
      </Link>
    </Box>
  );
};

export default ProductCard;