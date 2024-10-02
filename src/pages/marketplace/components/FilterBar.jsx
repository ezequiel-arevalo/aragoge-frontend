import { CategoryFilter } from './filters/CategoryFilter';
import { useSelector } from 'react-redux';

export const FilterBar = ({ onCategoryChange }) => {
  const categories = useSelector((state) => state.plannings.categories);

  return (
    <CategoryFilter categories={categories} onCategoryChange={onCategoryChange} />
  );
};