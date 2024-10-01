import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlannings } from '@/redux/plannings/planningsSlice';
import { PlanningCard } from './card/PlanningCard';
import { SimpleGrid } from '@chakra-ui/react';
import { SuggestedPlannings } from './suggested/SuggestedPlannings'; // Importar el nuevo componente

export const ProductList = ({ selectedCategory }) => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.plannings);

    useEffect(() => {
        dispatch(fetchPlannings());
    }, [dispatch]);

    if (loading) return <p>Cargando planificaciones...</p>;
    if (error) return <p>Error: {error}</p>;

    // Filtrar las planificaciones según la categoría seleccionada
    const filteredPlannings = selectedCategory
        ? items.filter((planning) => planning.category_id === parseInt(selectedCategory))
        : items;

    return (
        <>
            {/* Mostrar sugerencias si no hay planificaciones */}
            {filteredPlannings.length === 0 && <SuggestedPlannings />}

            {/* Mostrar el grid solo si hay planificaciones */}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4}>
                {filteredPlannings.map((planning) => (
                    <PlanningCard key={planning.id} planning={planning} />
                ))}
            </SimpleGrid>
        </>
    );
};