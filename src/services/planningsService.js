import { call } from "./callFetch";

/**
 * Función para obtener las planificaciones desde la API.
 * @returns {Promise<Object>} - Datos de las planificaciones.
 */
export const fetchPlannings = (searchTerm = '') => {
  const queryParam = searchTerm ? `?search=${searchTerm}` : '';
  return call(`plannings${queryParam}`, 'GET');
};

/**
 * Función para obtener una planificación específica por ID.
 * @param {number} id - ID de la planificación a obtener.
 * @returns {Promise<Object>} - Datos de la planificación.
 */
export const fetchPlanningById = (id) => {
  return call(`plannings/${id}`, 'GET');
};

/**
 * Obtiene las suscripciones de una planificación específica.
 * @param {number} planningId - ID de la planificación.
 * @returns {Promise<Object>} - Lista de suscripciones de la planificación.
 */
export const getSubscriptionsByPlanningId = (planningId) => {
  return call(`plannings/${planningId}/subscriptions`, 'GET');
};

/**
 * Obtiene planificaciones sugeridas basadas en una categoría.
 * @param {number} categoryId - ID de la categoría.
 * @returns {Promise<Object>} - Lista de planificaciones sugeridas.
 */
export const fetchSuggestedPlannings = async (categoryId) => {
  try {
    const response = await fetchPlannings();
    const allPlannings = response.data;
    const suggestedPlannings = allPlannings.filter(planning => planning.category_id === categoryId);
    return { data: suggestedPlannings.slice(0, 4) }; // Devuelve solo 4 planificaciones sugeridas
  } catch (error) {
    throw new Error('Error al obtener planificaciones sugeridas');
  }
};