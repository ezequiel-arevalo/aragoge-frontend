import { call } from "./callFetch";

/**
 * Obtiene todos los roles disponibles.
 * @returns {Promise<Object>} - Lista de roles.
 */
export const getRoles = () => {
  return call('roles', 'GET');
};

/**
 * Obtiene un rol específico por su ID.
 * @param {number} roleId - ID del rol.
 * @returns {Promise<Object>} - Detalles del rol.
 */
export const getRoleById = (roleId) => {
  return call(`roles/${roleId}`, 'GET');
};

/**
 * Obtiene todas las categorías.
 * @returns {Promise<Object>} - Lista de categorías.
 */
export const fetchCategories = () => {
    return call('categories', 'GET');
  };
  
  /**
   * Obtiene una categoría específica por su ID.
   * @param {number} categoryId - ID de la categoría.
   * @returns {Promise<Object>} - Detalles de la categoría.
   */
  export const getCategoryById = (categoryId) => {
    return call(`categories/${categoryId}`, 'GET');
  };

/**
 * Crea una nueva categoría.
 * @param {Object} categoryData - Datos de la categoría a crear.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Datos de la categoría creada.
 */
export const createCategory = (categoryData, token) => {
  return call('categories', 'POST', categoryData, token);
};

/**
 * Actualiza una categoría existente.
 * @param {number} categoryId - ID de la categoría a actualizar.
 * @param {Object} categoryData - Nuevos datos de la categoría.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Datos de la categoría actualizada.
 */
export const updateCategory = (categoryId, categoryData, token) => {
  return call(`categories/${categoryId}`, 'PATCH', categoryData, token);
};

/**
 * Elimina una categoría.
 * @param {number} categoryId - ID de la categoría a eliminar.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object|null>} - Respuesta del servidor tras eliminar la categoría.
 */
export const deleteCategory = (categoryId, token) => {
  return call(`categories/${categoryId}`, 'DELETE', null, token);
};
