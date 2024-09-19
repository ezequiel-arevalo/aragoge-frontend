import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserDetails } from '@/services/userService';

export const ProfileForm = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Obtenemos el token y el ID del usuario desde Redux
  const { user, accessToken } = useSelector((state) => ({
    user: state.user.user, // El usuario logueado
    accessToken: state.user.accessToken, // Token del usuario
  }));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && accessToken) {
          const data = await getUserDetails(user.id, accessToken);
          setUserData(data.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [user, accessToken]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="profile-info">
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre:</strong> {userData.first_name}</p>
      <p><strong>Apellido:</strong> {userData.last_name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>ID de Imagen:</strong> {userData.image_id ?? 'No disponible'}</p>
      <p><strong>Rol ID:</strong> {userData.rol_id}</p>
      <p><strong>Nombre del Rol:</strong> {userData.rol_name}</p>
      <p><strong>ID Profesional:</strong> {userData.professional_id ?? 'No disponible'}</p>
      <p><strong>Fecha de Creación:</strong> {new Date(userData.created_at).toLocaleString()}</p>
      <p><strong>Última Actualización:</strong> {userData.updated_at ? new Date(userData.updated_at).toLocaleString() : 'No disponible'}</p>
    </div>
  );
};
