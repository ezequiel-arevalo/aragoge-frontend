import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlannings as fetchPlanningsService } from '@/services/planningsService';

/**
 * Acción asincrónica para obtener planificaciones.
 */
export const fetchPlannings = createAsyncThunk('plannings/fetchPlannings', async () => {
    console.log('Fetching plannings...'); // Log para depuración
    try {
        const data = await fetchPlanningsService();
        console.log('Plannings fetched successfully:', data); // Log de éxito
        return data; // Retorna los datos de las planificaciones
    } catch (error) {
        console.error('Error fetching plannings:', error.message); // Log de error
        throw new Error(error.message || 'Error al cargar las planificaciones');
    }
});

const planningsSlice = createSlice({
    name: 'plannings',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlannings.pending, (state) => {
                state.loading = true;
                console.log('Loading plannings...'); // Log de carga
            })
            .addCase(fetchPlannings.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                console.log('Plannings loaded:', action.payload); // Log de datos cargados
            })
            .addCase(fetchPlannings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.error('Error loading plannings:', action.error.message); // Log de error
            });
    },
});

export default planningsSlice.reducer;
