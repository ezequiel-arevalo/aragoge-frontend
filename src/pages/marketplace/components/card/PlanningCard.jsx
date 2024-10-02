import { Link } from 'react-router-dom';
import { Box, Image, Text, Heading, Badge, VStack, Flex, Button } from '@chakra-ui/react';

export const PlanningCard = ({ planning }) => {
  const {
    id,
    image_id,
    title,
    synopsis,
    description,
    price,
    professional_name,
    category_name,
  } = planning;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
      bg="white"
    >
      <Box position="relative">
        <Image
          src={image_id ? `/api/images/${image_id}` : undefined}
          alt={title || 'Planning image'}
          objectFit="cover"
          width="100%"
          height="200px"
          fallbackSrc="https://placehold.co/600x400/png" // Placeholder image
        />
        <Badge
          position="absolute"
          top="2"
          right="2"
          colorScheme="green"
          fontSize="0.8em"
          borderRadius="full"
          px="2"
          _hover={{color: 'green'}}
        >
          {category_name}
        </Badge>
      </Box>
      <VStack p={4} align="stretch" spacing={3} minH="250px">
        <Heading as="h2" size="md" noOfLines={2} minH="50px">
          {title || 'Untitled Planning'}
        </Heading>
        <Text
          fontSize="sm"
          color="gray.600"
          minH="100px" // Altura mínima de 100 píxeles
          maxH="100px" // Altura máxima de 100 píxeles
          overflow="hidden" // Ocultar desbordamiento
          noOfLines={3} // Limitar el número de líneas a 3
        >
          {synopsis || description || 'No description available'}
        </Text>
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold" color="green.600">
            ${price?.toFixed(2) ?? '0.00'}
          </Text>
          <Text fontSize="sm" color="gray.500">
            By {professional_name || 'Unknown Professional'}
          </Text>
        </Flex>
        <Link to={`/planning/${id}`} style={{ marginTop: 'auto' }}>
          <Button
            width="full"
            colorScheme="light"
            variant="solid"
            size="md"
            borderRadius="full"
            boxShadow="md"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            transition="all 0.2s"
          >
            View Details
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};