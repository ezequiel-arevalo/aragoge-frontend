import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { fetchProducts } from '@/services/productService';
import { filterAndSortProducts } from '@/utilities/products';

const ProductList = ({ category, priceSort, priceRange }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Carga de productos
  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  // Filtra y ordena los productos cuando cambian los filtros
  useEffect(() => {
    const filtered = filterAndSortProducts(products, category, priceRange, priceSort);
    setFilteredProducts(filtered);
  }, [category, priceSort, priceRange, products]);

  return (
    <div className="relative p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layoutId={product.id}
            onClick={() => setSelectedId(product.id)}
            className="cursor-pointer p-4 border rounded-lg"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      {loading && <>Loading...<Spinner/></>}
    </div>
  );
};

export default ProductList;
