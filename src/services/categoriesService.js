const URL = import.meta.env.VITE_API_KEY;

export const fetchCategories = async () => {
    const response = await fetch(`${URL}api/categories`);
    if (!response.ok) {
      throw new Error('Error al cargar las categorías');
    }
    const data = await response.json();
    return data.data; // Retorna solo los datos de las categorías
  };