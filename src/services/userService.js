export const registerUser = async (userData) => {
    const userWithRole = { ...userData, rol_id: 2 }; // Añadimos a la hora de registrar al usuario el ROL con el ID 2
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userWithRole),
    });
  
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Error en el registro');
    }

    return data;
  } catch (error) {
    // console.error('Error en el registro:', error.message);
    throw error;
  };
};

export const loginUser = async (userData) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    const data = await response.json();
    console.log(`userService: ${data}`);

    if (!response.ok) {
      throw new Error(data.message || 'Error en el inicio de sesión');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (token) => {
  try {
    // Depuramos los datos antes de enviarlos
    console.log("Enviando petición de logout con token:", token);

    const response = await fetch(`http://127.0.0.1:8000/api/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Enviamos el token en el header Authorization
      },
    });

    // Verificamos si la respuesta tiene contenido antes de parsear
    let data = null;
    if (response.status !== 204) { // 204 indica 'No Content'
      data = await response.json();
      console.log("Respuesta del servidor de logout:", data);
    }

    if (!response.ok) {
      throw new Error(data?.message || 'Error en el cierre de sesión');
    }

    return data;
  } catch (error) {
    console.error("Error durante el logout:", error);
    throw error;
  }
};

// Obtén los detalles del usuario por ID
export const getUserDetails = async (userId, token) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Error al obtener los detalles del usuario');
    }

    return data;
  } catch (error) {
    console.error("Error al obtener los detalles del usuario:", error);
    throw error;
  }
};