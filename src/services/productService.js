export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Smartphone', category: 'electronics', price: 299, src: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Laptop', category: 'electronics', price: 999, src: 'https://via.placeholder.com/150' },
          { id: 3, name: 'T-shirt', category: 'fashion', price: 19, src: 'https://via.placeholder.com/150' },
          { id: 4, name: 'Novel', category: 'books', price: 10, src: 'https://via.placeholder.com/150' },
          { id: 5, name: 'Sneakers', category: 'fashion', price: 49, src: 'https://via.placeholder.com/150' },
          { id: 6, name: 'Headphones', category: 'electronics', price: 199, src: 'https://via.placeholder.com/150' },
        ]);
      }, 1000);
    });
  };
  