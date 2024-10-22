import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPlannings as fetchPlanningsService, fetchPlanningById, fetchSuggestedPlannings as fetchSuggestedPlanningsService } from '@/services/planningsService';
import { fetchCategories as fetchCategoriesService } from '@/services/adminService';

// Acción asincrónica para obtener todas las planificaciones
export const fetchPlannings = createAsyncThunk('plannings/fetchPlannings', async (searchTerm = '') => {
    try {
        const data = await fetchPlanningsService(searchTerm);
        return data;
    } catch (error) {
        throw new Error(error.message || 'Error al cargar las planificaciones');
    }
});

// Acción asincrónica para obtener una planificación por ID
export const fetchPlanning = createAsyncThunk('plannings/fetchPlanning', async (id) => {
    try {
        const data = await fetchPlanningById(id);
        return data;
    } catch (error) {
        throw new Error(error.message || 'Error al cargar la planificación');
    }
});

// Acción asincrónica para obtener las categorías
export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    try {
        const data = await fetchCategoriesService();
        return data;
    } catch (error) {
        throw new Error(error.message || 'Error al cargar las categorías');
    }
});

// Acción asincrónica para obtener planificaciones sugeridas
export const fetchSuggestedPlannings = createAsyncThunk(
    'plannings/fetchSuggestedPlannings',
    async (categoryId, { rejectWithValue }) => {
      try {
        const data = await fetchSuggestedPlanningsService(categoryId);
        return data;
      } catch (error) {
        return rejectWithValue(error.message || 'Error al cargar las planificaciones sugeridas');
      }
    }
  );

  const planningsSlice = createSlice({
    name: 'plannings',
    initialState: {
      items: [],
      planningDetail: null,
      suggestedPlannings: [],
      categories: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Manejo de todas las planificaciones
        builder
            .addCase(fetchPlannings.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlannings.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
            })
            .addCase(fetchPlannings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Manejo de la planificación individual
        builder
            .addCase(fetchPlanning.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlanning.fulfilled, (state, action) => {
                state.loading = false;
                state.planningDetail = action.payload.data;
            })
            .addCase(fetchPlanning.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Manejo de las categorías
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload.data;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
        .addCase(fetchSuggestedPlannings.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchSuggestedPlannings.fulfilled, (state, action) => {
            state.loading = false;
            state.suggestedPlannings = action.payload.data;
        })
        .addCase(fetchSuggestedPlannings.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default planningsSlice.reducer;