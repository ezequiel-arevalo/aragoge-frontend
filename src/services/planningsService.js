import { call } from './callFetch';

/**
 * Función para obtener las planificaciones desde la API.
 * 
 * @returns {Promise<Object>} Datos de las planificaciones.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
export const fetchPlannings = async () => {
    return call('plannings', 'GET');
};

/**
 * Función para obtener las categorías desde la API.
 * 
 * @returns {Promise<Object>} Datos de las categorías.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
export const fetchCategories = async () => {
    return call('categories', 'GET');
};

/**
 * Función para obtener una planificación específica por ID desde la API.
 * 
 * @param {number} id - ID de la planificación a obtener.
 * @returns {Promise<Object>} Datos de la planificación.
 */
export const fetchPlanningById = async (id) => {
    return call(`plannings/${id}`, 'GET');
};