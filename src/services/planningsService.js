import { call } from "./callFetch";

/**
 * Función para obtener las planificaciones desde la API.
 * @returns {Promise<Object>} - Datos de las planificaciones.
 */
export const fetchPlannings = () => {
  return call('plannings', 'GET');
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
