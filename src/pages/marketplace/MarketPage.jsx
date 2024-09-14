import { useState } from "react";
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';

export const MarketPage = () => {
  const [category, setCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]); // Rango inicial

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handlePriceSortChange = (selectedSort) => {
    setPriceSort(selectedSort);
  };

  const handleRangeChange = (range) => {
    setPriceRange(range);
  };

  return (
    <section className="max-w-[1440px] mx-auto">
      <FilterBar
        onCategoryChange={handleCategoryChange}
        onPriceSortChange={handlePriceSortChange}
        onRangeChange={handleRangeChange}
      />
      <ProductList category={category} priceSort={priceSort} priceRange={priceRange} />
    </section>
  );
};

export default MarketPage;