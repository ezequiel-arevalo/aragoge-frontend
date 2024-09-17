import { Text, Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

export const RangeFilter = ({ onRangeChange }) => {
  const [range, setRange] = useState([0, 10000]); // Rango inicial

  const handleMinChange = (event) => {
    const newMin = Number(event.target.value);
    if (newMin <= range[1]) {
      setRange([newMin, range[1]]);
      onRangeChange([newMin, range[1]]);
    }
  };

  const handleMaxChange = (event) => {
    const newMax = Number(event.target.value);
    if (newMax >= range[0]) {
      setRange([range[0], newMax]);
      onRangeChange([range[0], newMax]);
    }
  };

  return (
    <Box p={4}>
      <Text mb={2}>Price Range: ${range[0]} - ${range[1]}</Text>
      <FormControl>
        <FormLabel>Min Price</FormLabel>
        <Input
          type="number"
          value={range[0]}
          min={0}
          max={range[1]}
          onChange={handleMinChange}
          mb={2}
        />
        <FormLabel>Max Price</FormLabel>
        <Input
          type="number"
          value={range[1]}
          min={range[0]}
          max={10000} // Puedes ajustar el máximo según tus necesidades
          onChange={handleMaxChange}
        />
      </FormControl>
    </Box>
  );
};

