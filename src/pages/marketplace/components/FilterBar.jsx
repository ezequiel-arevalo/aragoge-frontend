import { CategoryFilter } from './filters/CategoryFilter';

export const FilterBar = ({ onCategoryChange }) => {
  return (
    <>
      <CategoryFilter onCategoryChange={onCategoryChange} />
    </>
  );
};
