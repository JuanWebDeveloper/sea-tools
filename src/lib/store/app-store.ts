import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './slices/ui-slice';

export const appStore = configureStore({
 reducer: {
  ui: uiSlice.reducer,
 },
});

//*> Tipado para acceder al estado completo de la aplicación desde cualquier parte de la app
export type RootState = ReturnType<typeof appStore.getState>;

//*> Tipado para el despachador de acciones del store de la aplicación
export type AppDispatch = typeof appStore.dispatch;
