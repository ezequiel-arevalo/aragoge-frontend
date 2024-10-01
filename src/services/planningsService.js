const URL = import.meta.env.VITE_API_KEY;

/**
 * Función para obtener las planificaciones desde la API.
 * 
 * @returns {Promise<Object>} Datos de las planificaciones.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
export const fetchPlannings = async () => {
    const response = await fetch(`${URL}api/plannings`);
    if (!response.ok) {
        throw new Error('Error al cargar las planificaciones');
    }
    const data = await response.json();
    return data.data; // Retorna solo los datos de las planificaciones
};