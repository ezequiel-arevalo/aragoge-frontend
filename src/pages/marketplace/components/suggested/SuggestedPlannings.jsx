import { useSelector } from 'react-redux';
import { SimpleGrid, Box, Alert, AlertIcon } from '@chakra-ui/react';
import { PlanningCard } from '../card/PlanningCard'; // Importar el componente PlanningCard

// Función para obtener aleatoriamente planificaciones
const getRandomPlannings = (plannings, count) => {
    const shuffled = [...plannings].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Retorna solo el número de planificaciones solicitadas
};

export const SuggestedPlannings = () => {
    const { items } = useSelector((state) => state.plannings);

    // Obtener hasta 5 planificaciones aleatorias del backend
    const suggestedPlannings = getRandomPlannings(items, 5);

    return (
        <Box mb={4}>
            <Alert status="info" mb={4}>
                <AlertIcon />
                Aún no tenemos planificaciones en esa categoría, pero te sugerimos estas:
            </Alert>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
                {suggestedPlannings.map((planning) => (
                    <PlanningCard 
                        key={planning.id} 
                        planning={planning} 
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
};