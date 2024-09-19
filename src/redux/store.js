import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';  // Importa tu reducer

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
