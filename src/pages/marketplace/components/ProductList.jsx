import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlannings } from '@/redux/plannings/planningsSlice';
import { PlanningCard } from './card/PlanningCard';
import { SimpleGrid, Text } from '@chakra-ui/react';

export const ProductList = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.plannings);

  useEffect(() => {
    dispatch(fetchPlannings());
  }, [dispatch]);

  if (loading) return <p>Cargando planificaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  const plannings = items || [];

  // Filtrar planificaciones por categoría seleccionada
  const filteredPlannings = selectedCategory
    ? plannings.filter((planning) => planning.category_id === parseInt(selectedCategory))
    : plannings;

  return (
    <>
      {filteredPlannings.length === 0 ? (
        <Text>No hay planificaciones para esta categoría.</Text>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
          {filteredPlannings.map((planning) => (
            <PlanningCard key={planning.id} planning={planning} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};