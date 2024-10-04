import { call } from "./callFetch";

/**
 * Obtiene todas las especialidades de profesionales.
 * @returns {Promise<Object>} - Lista de especialidades.
 */
export const getSpecialities = () => {
  return call('specialities', 'GET');
};

/**
 * Obtiene una especialidad específica por su ID.
 * @param {number} specialityId - ID de la especialidad.
 * @returns {Promise<Object>} - Detalles de la especialidad.
 */
export const getSpecialityById = (specialityId) => {
  return call(`specialities/${specialityId}`, 'GET');
};

/**
 * Crea un perfil profesional para un usuario.
 * @param {Object} profileData - Datos del perfil profesional.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Datos del perfil profesional creado.
 */
export const createProfessionalProfile = (profileData, token) => {
  return call('professionals/profile', 'POST', profileData, token);
};

/**
 * Actualiza el perfil profesional de un usuario.
 * @param {Object} profileData - Datos actualizados del perfil profesional.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Datos del perfil profesional actualizado.
 */
export const updateProfessionalProfile = (profileData, token) => {
  return call('professionals/profile', 'PATCH', profileData, token);
};