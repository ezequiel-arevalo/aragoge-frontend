import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

export const PlanningDetail = ({ setTitle }) => {
  const { id } = useParams();
  const planning = useSelector((state) =>
    state.plannings.items.find((item) => item.id === parseInt(id))
  );

  useEffect(() => {
    if (planning) {
      setTitle(planning.title);
    }
  }, [planning, setTitle]);

  if (!planning) {
    return <Text>Planificación no encontrada</Text>;
  }

  return (
    <>
      <Image 
        src={planning.image_id || 'https://placehold.co/600x400.png'} 
        alt={planning.title} 
      />
      <Heading mt="4">{planning.title}</Heading>
      <Text mt="2">{planning.description}</Text>
      <Text fontWeight="bold" mt="2">Precio: ${planning.price}</Text>
      <Text>Profesional: {planning.professional_name}</Text>
      <Text>Categoría: {planning.category_name}</Text>
      <Text>ID: {planning.id}</Text>
      <Text>Creado el: {new Date(planning.created_at).toLocaleDateString()}</Text>
      <Text>Última actualización: {planning.updated_at ? new Date(planning.updated_at).toLocaleDateString() : 'No disponible'}</Text>
    </>
  );
};