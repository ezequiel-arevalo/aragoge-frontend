import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '@/services/userService';

// Acción para registrar al usuario
export const registerNewUser = createAsyncThunk(
  'user/registerNewUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await registerUser(userData);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Error en el registro');
    }
  }
);

// Acción para loguear al usuario
export const loginUserAction = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginUser(userData);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Error en el inicio de sesión');
    }
  }
);

// Acción asincrónica para logout
export const logoutUserAction = createAsyncThunk(
  'user/logoutUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().user.accessToken;  // Obtenemos el token del estado de Redux
    try {
      const response = await logoutUser(token);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Error en el cierre de sesión');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    user: null, // Para almacenar la información del usuario logueado
    accessToken: null,  // Almacenar el access_token
  },
  reducers: {
    // Reducer para limpiar el estado en el logout
    clearUserData: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Registro de usuario
      .addCase(registerNewUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerNewUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login de usuario
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user; // Guardar los datos del usuario
        state.accessToken = action.payload.access_token; // Guardar el access_token en Redux
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Logout de usuario
      .addCase(logoutUserAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.user = null;
        state.accessToken = null;  // Limpiar el access_token
      })
      .addCase(logoutUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserData } = userSlice.actions;

export default userSlice.reducer;