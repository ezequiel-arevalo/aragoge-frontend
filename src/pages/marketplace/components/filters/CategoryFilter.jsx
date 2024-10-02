import { Select } from '@chakra-ui/react';

export const CategoryFilter = ({ categories, onCategoryChange }) => {
  const handleChange = (e) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    onCategoryChange(value);
  };

  return (
    <Select placeholder="Selecciona una categoría" onChange={handleChange}>
      <option value="all">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};