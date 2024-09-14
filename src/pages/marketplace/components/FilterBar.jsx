import { Box, Flex } from "@chakra-ui/react";
import { CategoryFilter } from "./filters/CategoryFilter";
import { PriceFilter } from "./filters/PriceFilter";
import { RangeFilter } from "./filters/RangeFilter";

const FilterBar = ({ onCategoryChange, onPriceSortChange, onRangeChange }) => {
  return (
    <Box p={4} rounded="md">
      <Flex>
        <CategoryFilter onCategoryChange={onCategoryChange} />
        <PriceFilter onPriceSortChange={onPriceSortChange} />
        <RangeFilter onRangeChange={onRangeChange} />
      </Flex>
    </Box>
  );
};

export default FilterBar;
