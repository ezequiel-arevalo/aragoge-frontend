export const filterAndSortProducts = (products, category, priceRange, priceSort) => {
    let filtered = category
      ? products.filter((product) => product.category === category)
      : products;
  
    filtered = filtered.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
  
    if (priceSort === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'desc') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
  
    return filtered;
  };