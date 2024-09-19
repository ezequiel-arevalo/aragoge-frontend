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
      // Almacenar el token en el local storage
      localStorage.setItem('access_token', response.access_token);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Error en el inicio de sesión');
    }
  }
);

// Acción asincrónica para logout
export const logoutUserAction = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('access_token');
    try {
      const response = await logoutUser(token);
      // Eliminar el token del local storage
      localStorage.removeItem('access_token');
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
  },
  reducers: {},
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
        state.user = null; // Limpiar la información del usuario
      })
      .addCase(logoutUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;