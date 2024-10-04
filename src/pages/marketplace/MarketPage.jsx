import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlannings, fetchCategories } from '@/redux/plannings/planningsSlice'; // Asegúrate de que exista fetchCategories
import { FilterBar } from './components/FilterBar';
import { PlanningList } from './components/PlanningList';
import { Box, Flex } from '@chakra-ui/react';

export const MarketPage = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    selectedCategory: null,
    priceRange: { minPrice: '', maxPrice: '' }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlannings());
    dispatch(fetchCategories()); // Asegúrate de cargar las categorías
  }, [dispatch]);

  // Función para manejar la aplicación de los filtros
  const handleFiltersApply = ({ searchTerm, selectedCategory, priceRange }) => {
    setFilters({ searchTerm, selectedCategory, priceRange });
  };

  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Market Page</h2>
      <Flex direction={{ base: 'column', lg: 'row' }} gap={4}>
        <Box flex={{ base: 'none', lg: '1' }} overflow={'hidden'}>
          <FilterBar onFiltersApply={handleFiltersApply} />
        </Box>

        <Box flex="3" overflow={'hidden'}>
          <PlanningList
            selectedCategory={filters.selectedCategory}
            searchTerm={filters.searchTerm}
            priceRange={filters.priceRange}
          />
        </Box>
      </Flex>
    </section>
  );
};