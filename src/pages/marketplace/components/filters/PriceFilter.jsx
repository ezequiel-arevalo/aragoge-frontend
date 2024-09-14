import { Select, Box } from "@chakra-ui/react";

export const PriceFilter = ({ onPriceSortChange }) => {
  return (
    <Box p={4}>
      <Select
        placeholder="Sort by price"
        onChange={(e) => onPriceSortChange(e.target.value)}
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </Box>
  );
};
