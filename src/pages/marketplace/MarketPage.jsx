import {FilterBar} from './components/FilterBar';
import {ProductList} from './components/ProductList';
import { Box, Flex } from '@chakra-ui/react';

export const MarketPage = () => {
  return (
    <section className="mx-auto text-center p-4">
      <h2 className="text-h2 font-semibold font-title py-4">Market Page</h2>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        gap={4}
      >
        {/* Filtros en el lado izquierdo o arriba en móviles */}
        <Box flex={{ base: 'none', lg: '1' }} overflow={'hidden'}>
          <FilterBar />
        </Box>

        {/* Lista de productos a la derecha o debajo en móviles */}
        <Box flex="3" overflow={'hidden'}>
          <ProductList />
        </Box>
      </Flex>
    </section>
  );
};