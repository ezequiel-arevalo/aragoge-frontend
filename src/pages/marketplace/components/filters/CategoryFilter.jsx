import { Select, Box } from "@chakra-ui/react";

export const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <Box p={4}>
      <Select
        placeholder="Filter by category"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
      </Select>
    </Box>
  )
}