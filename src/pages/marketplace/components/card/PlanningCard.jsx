import { Link } from 'react-router-dom';
import { Box, Image, Text, Heading } from '@chakra-ui/react';

export const PlanningCard = ({ planning }) => {
    const defaultImage = 'https://placehold.co/600x400.png'; // URL de la imagen por defecto

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" boxShadow="md">
            {/* Mostrar la imagen usando la por defecto si image_id no está disponible */}
            <Image 
                src={defaultImage} 
                alt={planning.title} 
                fallbackSrc={defaultImage} // Fallback por si la imagen no carga
            />
            <Heading as="h4" size="md" mt="2">{planning.title}</Heading>
            <Text mt="1">{planning.synopsis}</Text>
            <Text fontWeight="bold">Precio: ${planning.price}</Text>
            <Text>Profesional: {planning.professional_name}</Text>
            <Text>Categoría: {planning.category_name}</Text>
            <Text>ID: {planning.id}</Text>
            <Text>Creado el: {new Date(planning.created_at).toLocaleDateString()}</Text>
            <Text>Última actualización: {planning.updated_at ? new Date(planning.updated_at).toLocaleDateString() : 'No disponible'}</Text>
            <Link
                to={`/planning/${planning.id}`}
                className="bg-[#DA1641] text-[#FFFFFF] block w-full mt-4 py-2 px-4 rounded hover:bg-[#C30D35] hover:text-[#FFFFFF]"
            >
                Ver Mas
            </Link>
        </Box>
    );
};
