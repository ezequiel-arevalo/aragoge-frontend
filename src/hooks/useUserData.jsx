import { useState, useEffect } from 'react';
import { getUserDetails } from '@/services/userService';

export const useUserData = (user, accessToken) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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

  return { userData, error };
};
