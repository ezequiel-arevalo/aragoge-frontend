/**
 * URL base de la API, obtenida desde el archivo .env
 * @constant {string}
 */
const URL = import.meta.env.VITE_API_KEY;

export const call = async (endpoint, method = 'GET', body = null, token = null) => {
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }), // Agregar el token si está presente
    };
  
    try {
      const response = await fetch(`${URL}api/${endpoint}`, {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) }), // Agregar el body si está presente
      });
  
      const data = response.status !== 204 ? await response.json() : null; // Si no es 204, parsear la respuesta
      if (!response.ok) {
        const errorMessage = data?.errors
          ? Object.values(data.errors).flat().join(', ')
          : data?.message || 'Error en la petición';
        throw new Error(errorMessage);
      }
  
      return data;
    } catch (error) {
      throw new Error(error.message || 'Error en la petición');
    }
  };
  