import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
import { fetchCategories } from '@/services/categoriesService';

export const CategoryFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        console.log('Categorías obtenidas:', categoriesData); // Agregado
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };
    
    getCategories();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value === "all" ? null : e.target.value;
    console.log('Categoría seleccionada:', value); // Agregado
    onCategoryChange(value);
  };

  return (
    <Select placeholder="Selecciona una categoría" onChange={handleChange}>
      <option value="all">Todas las categorías</option>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};