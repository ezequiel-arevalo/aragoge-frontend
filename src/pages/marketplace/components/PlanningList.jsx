import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlannings } from '@/redux/plannings/planningsSlice';
import { PlanningCard } from './card/PlanningCard';
import { SimpleGrid, Text } from '@chakra-ui/react';

export const PlanningList = ({ selectedCategory, searchTerm, priceRange }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.plannings);

  useEffect(() => {
    dispatch(fetchPlannings());
  }, [dispatch]);

  if (loading) return <p>Cargando planificaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  const plannings = items || [];

  // Filtrar por categoría seleccionada
  let filteredPlannings = selectedCategory
    ? plannings.filter((planning) => planning.category_id === parseInt(selectedCategory))
    : plannings;

  // Filtrar por término de búsqueda
  if (searchTerm) {
    filteredPlannings = filteredPlannings.filter((planning) =>
      planning.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Filtrar por rango de precio
  if (priceRange.minPrice || priceRange.maxPrice) {
    filteredPlannings = filteredPlannings.filter((planning) => {
      const price = planning.price;
      return (
        (!priceRange.minPrice || price >= priceRange.minPrice) &&
        (!priceRange.maxPrice || price <= priceRange.maxPrice)
      );
    });
  }

  return (
    <>
      {filteredPlannings.length === 0 ? (
        <Text>No hay planificaciones que coincidan con los filtros.</Text>
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