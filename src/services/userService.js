/**
 * URL base de la API, obtenida desde el archivo .env
 * @constant {string}
 */
const URL = import.meta.env.VITE_API_KEY;

/**
 * Registra un nuevo usuario en el sistema.
 * Añade el rol con ID 2 por defecto a los datos del usuario.
 * 
 * @async
 * @function registerUser
 * @param {Object} userData - Datos del usuario a registrar.
 * @param {string} userData.username - Nombre de usuario.
 * @param {string} userData.email - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} Los datos de respuesta del backend si el registro fue exitoso.
 * @throws {Error} Si ocurre un error durante el registro.
 */
export const registerUser = async (userData) => {
  const userWithRole = { ...userData, rol_id: 2 }; 
  try {
    const response = await fetch(`${URL}api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userWithRole),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.errors 
        ? Object.values(data.errors).flat().join(', ') // Unir los mensajes de error
        : data.message || 'Error en el registro';
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Error en el registro');
  }
};

/**
 * Inicia sesión de un usuario con las credenciales proporcionadas.
 * 
 * @async
 * @function loginUser
 * @param {Object} userData - Datos del usuario para iniciar sesión.
 * @param {string} userData.email - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} Los datos de respuesta del backend si el inicio de sesión fue exitoso.
 * @throws {Error} Si ocurre un error durante el inicio de sesión.
 */
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${URL}api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.errors 
        ? Object.values(data.errors).flat().join(', ') 
        : data.message || 'Error en el inicio de sesión';
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Error en el inicio de sesión');
  }
};

/**
 * Cierra la sesión del usuario actual enviando un token de autenticación.
 * 
 * @async
 * @function logoutUser
 * @param {string} token - El token de autenticación del usuario.
 * @returns {Promise<Object|null>} Los datos de respuesta del backend si es necesario, o null si el servidor responde con 204 (sin contenido).
 * @throws {Error} Si ocurre un error durante el cierre de sesión.
 */
export const logoutUser = async (token) => {
  try {
    console.log("Enviando petición de logout con token:", token);

    const response = await fetch(`${URL}api/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    let data = null;
    if (response.status !== 204) { 
      data = await response.json();
      console.log("Respuesta del servidor de logout:", {data});
    }

    if (!response.ok) {
      throw new Error(data?.errors || 'Error en el cierre de sesión');
    }

    return data;
  } catch (error) {
    console.error("Error durante el logout:", error);
    throw error;
  }
};

/**
 * Obtiene los detalles de un usuario por su ID.
 * 
 * @async
 * @function getUserDetails
 * @param {number} userId - ID del usuario cuyos detalles se desean obtener.
 * @param {string} token - El token de autenticación del usuario.
 * @returns {Promise<Object>} Los datos del usuario obtenidos del backend.
 * @throws {Error} Si ocurre un error al obtener los detalles del usuario.
 */
export const getUserDetails = async (userId, token) => {
  try {
    const response = await fetch(`${URL}api/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('Datos recibidos del backend (getUserDetails):', data);
    if (!response.ok) {
      throw new Error(data.message || 'Error al obtener los detalles del usuario');
    }

    return data;
  } catch (error) {
    console.error("Error al obtener los detalles del usuario:", error);
    throw error;
  }
};