import { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { ProductList } from './components/ProductList';
import { Box, Flex } from '@chakra-ui/react';

export const MarketPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  const handleCategoryChange = (category) => {
    console.log('Categoría cambiada en MarketPage:', category); // Agregado
    setSelectedCategory(category);
  };

  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Market Page</h2>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={4}
      >
        <Box flex={{ base: 'none', lg: '1' }} overflow={'hidden'}>
          <FilterBar onCategoryChange={handleCategoryChange} />
        </Box>

        <Box flex="3" overflow={'hidden'}>
          <ProductList selectedCategory={selectedCategory} />
        </Box>
      </Flex>
    </section>
  );
};