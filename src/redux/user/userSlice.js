/**
 * @file userSlice.js
 * Slice de Redux para gestionar el estado del usuario, incluyendo registro, login, y logout.
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '@/services/userService';

/**
 * Acción asincrónica para registrar un nuevo usuario.
 * 
 * @function registerNewUser
 * @param {Object} userData - Datos del usuario a registrar.
 * @param {string} userData.username - Nombre de usuario.
 * @param {string} userData.email - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} Los datos de respuesta del backend si el registro fue exitoso.
 * @throws {Error} Si ocurre un error durante el registro, se rechaza con el mensaje de error.
 */
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

/**
 * Acción asincrónica para loguear al usuario.
 * 
 * @function loginUserAction
 * @param {Object} userData - Datos del usuario para iniciar sesión.
 * @param {string} userData.email - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} Los datos de respuesta del backend si el inicio de sesión fue exitoso.
 * @throws {Error} Si ocurre un error durante el inicio de sesión, se rechaza con el mensaje de error.
 */
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

/**
 * Acción asincrónica para cerrar sesión.
 * 
 * @function logoutUserAction
 * @param {void} _ - Parámetro no utilizado.
 * @returns {Promise<void>} Acción exitosa o con error.
 * @throws {Error} Si ocurre un error durante el cierre de sesión, se rechaza con el mensaje de error.
 */
export const logoutUserAction = createAsyncThunk(
  'user/logoutUser',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().user.accessToken;
    try {
      const response = await logoutUser(token);
      return response;
    } catch (err) {
      return rejectWithValue(err.message || 'Error en el cierre de sesión');
    }
  }
);

/**
 * Estado inicial del slice del usuario.
 * 
 * @constant {Object} initialState
 * @property {boolean} loading - Indica si una operación está en proceso.
 * @property {string|null} error - Mensaje de error en caso de fallo.
 * @property {Object|null} user - Datos del usuario autenticado.
 * @property {string|null} accessToken - Token de acceso del usuario.
 */
const initialState = {
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem('user')) || null,  // Recuperar el usuario de localStorage
  accessToken: localStorage.getItem('accessToken') || null,  // Recuperar el token de localStorage
};

/**
 * Slice de Redux para gestionar el estado del usuario.
 * Incluye reducers para manejar las acciones relacionadas con el registro, login y logout.
 * 
 * @function userSlice
 * @param {Object} state - El estado actual del slice.
 * @param {Object} action - La acción que se está despachando.
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Acción para limpiar los datos del usuario del estado y del localStorage.
     * 
     * @function clearUserData
     * @param {Object} state - El estado actual del slice.
     */
    clearUserData: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
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
        state.error = action.payload; // Almacenar el mensaje de error en Redux
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
        
        // Guardar el token y el usuario en localStorage
        localStorage.setItem('accessToken', action.payload.access_token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Captura el mensaje de error
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
        
        // Limpiar localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      })
      .addCase(logoutUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUserData } = userSlice.actions;
export default userSlice.reducer;