import { useState } from 'react';
import { Input, Flex } from '@chakra-ui/react';

export const PriceFilter = ({ onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    // Solo actualizar si no es negativo
    if (value === '' || parseFloat(value) >= 0) {
      setMinPrice(value);
      if (value !== '' && parseFloat(value) > parseFloat(maxPrice)) {
        setMaxPrice(''); // Limpiar maxPrice si minPrice supera el maxPrice
      }
      handlePriceChange(value, maxPrice);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    // Solo actualizar si no es negativo
    if (value === '' || parseFloat(value) >= 0) {
      setMaxPrice(value);
      if (value !== '' && parseFloat(value) < parseFloat(minPrice)) {
        setMinPrice(''); // Limpiar minPrice si maxPrice es menor que minPrice
      }
      handlePriceChange(minPrice, value);
    }
  };

  const handlePriceChange = (min, max) => {
    // Aplicar el cambio solo si los valores son válidos
    if (min !== '' && max !== '' && parseFloat(min) <= parseFloat(max)) {
      onPriceChange({ minPrice: min, maxPrice: max });
    }
  };

  return (
    <Flex direction="column" gap={2}>
      <Input
        placeholder="Precio mínimo"
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <Input
        placeholder="Precio máximo"
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
      {/* Se eliminó el botón de aplicar aquí */}
    </Flex>
  );
};