import { useState } from 'react';
import { CategoryFilter } from './filters/CategoryFilter';
import { SearchBar } from './filters/SearchBar';
import { PriceFilter } from './filters/PriceFilter';
import { Button, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export const FilterBar = ({ onFiltersApply }) => {
  const categories = useSelector((state) => state.plannings.categories);

  // Estados locales para manejar los valores de los filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ minPrice: '', maxPrice: '' });

  const handleApplyFilters = () => {
    // Enviar los filtros al componente padre
    onFiltersApply({
      searchTerm,
      selectedCategory,
      priceRange
    });
  };

  return (
    <Flex direction="column" gap={4} p={4} bg={'white'} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
      <SearchBar onSearchChange={(search) => setSearchTerm(search)} />
      <CategoryFilter 
        categories={categories} 
        onCategoryChange={(category) => setSelectedCategory(category)} 
      />
      <PriceFilter onPriceChange={(range) => setPriceRange(range)} />

      {/* Botón para aplicar todos los filtros */}
      <Button onClick={handleApplyFilters} colorScheme="light">
        Aplicar Filtros
      </Button>
    </Flex>
  );
};