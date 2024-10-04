import { Input } from '@chakra-ui/react';

export const SearchBar = ({ onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Buscar planificaciones"
      onChange={handleSearchChange}
    />
  );
};
