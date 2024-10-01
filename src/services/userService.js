import { call } from "./callFetch";

/**
 * Registra un nuevo usuario con el rol de "atleta".
 * @param {Object} userData - Datos del usuario a registrar.
 * @returns {Promise<Object>} - Datos del usuario registrado.
 */
export const registerUser = (userData) => {
  const userWithRole = { ...userData, rol_id: 2 }; 
  return call('register', 'POST', userWithRole);
};

/**
 * Inicia sesión del usuario.
 * @param {Object} userData - Credenciales del usuario (email, password).
 * @returns {Promise<Object>} - Datos del usuario autenticado.
 */
export const loginUser = (userData) => {
  return call('login', 'POST', userData);
};

/**
 * Cierra la sesión del usuario autenticado.
 * @param {string} token - Token de autenticación del usuario.
 * @returns {Promise<Object|null>} - Respuesta del servidor al cerrar sesión.
 */
export const logoutUser = (token) => {
  return call('logout', 'POST', null, token);
};

/**
 * Obtiene los detalles de un usuario específico.
 * @param {number} userId - ID del usuario.
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Detalles del usuario.
 */
export const getUserDetails = (userId, token) => {
  return call(`users/${userId}`, 'GET', null, token);
};

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
 * Actualiza la información de un usuario.
 * @param {Object} userData - Datos a actualizar (first_name, last_name, email, role_id).
 * @param {string} token - Token de autenticación.
 * @returns {Promise<Object>} - Datos actualizados del usuario.
 */
export const updateUser = (userData, token) => {
  return call('users/update', 'PATCH', userData, token);
};

/**
 * Elimina un usuario autenticado.
 * @param {string} token - Token de autenticación del usuario.
 * @returns {Promise<Object|null>} - Respuesta del servidor tras eliminar el usuario.
 */
export const deleteUser = (token) => {
  return call('users/delete', 'DELETE', null, token);
};