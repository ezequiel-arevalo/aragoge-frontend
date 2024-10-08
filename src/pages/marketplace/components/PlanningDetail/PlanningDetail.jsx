// components/PlanningDetail.js
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanning } from '@/redux/plannings/planningsSlice';
import { Box, Heading, Text, Image, Badge, VStack, Spinner, Button, Divider } from '@chakra-ui/react';

export const PlanningDetail = () => {
  const { id } = useParams(); // Obtén el ID desde la URL
  const dispatch = useDispatch();
  const { planningDetail: planning, loading, error } = useSelector(state => state.plannings);

  useEffect(() => {
    // Si no hay una planificación cargada o el ID no coincide, realizar fetch
    if (!planning || planning.id !== parseInt(id)) {
      dispatch(fetchPlanning(id));
    }
  }, [dispatch, id, planning]);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  if (!planning) {
    return <Text>No se encontró la planificación.</Text>;
  }

  const {
    image_id,
    title,
    synopsis,
    description,
    price,
    professional_name,
    category_name,
  } = planning;

  return (
    <Box className="container mx-auto px-4 py-8" bg="white" p={8} rounded="lg" shadow="md">
      <Box className="grid md:grid-cols-2 gap-8">
        {/* Imagen */}
        <Box>
          <Image
            src={image_id ? `/api/images/${image_id}` : 'https://placehold.co/600x400/png'}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </Box>

        {/* Detalles */}
        <VStack align="start" spacing={6}>
          <Box>
            <Heading size="xl">{title}</Heading>
            <Text fontSize="lg" color="gray.500" mt={2}>By {`Professional ${professional_name}`}</Text>
          </Box>

          <Badge variant="solid" colorScheme="green" fontSize="small" py={1} px={3} _hover={{ color: 'white' }}>
            {`Category ${category_name}`}
          </Badge>

          <Divider />

          <Box>
            <Heading size="md" mb={2}>Description</Heading>
            <Text color="gray.500">{synopsis || description}</Text>
          </Box>

          <Text fontSize="3xl" fontWeight="bold" color="green.600">${price?.toFixed(2)}</Text>

          <Button size="lg" colorScheme="light" width="full" maxW="200px">
            Buy Now
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};