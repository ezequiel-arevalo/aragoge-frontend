import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
import { fetchCategories } from '@/services/planningsService';

export const CategoryFilter = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetchCategories();
        console.log('Categorías obtenidas:', response);
        
        // Accedemos a `data` que contiene el array de categorías
        const categoriesData = response.data; 
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };
    
    getCategories();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value === "all" ? null : e.target.value;
    console.log('Categoría seleccionada:', value);
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