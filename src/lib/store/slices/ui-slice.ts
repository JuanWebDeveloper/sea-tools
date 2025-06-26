import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getInitialTheme } from '../utils/get-initial-theme';

interface UISliceModel {
 currentTheme: string;
 loading: boolean;
 hasError: boolean;
 errorMessage: string;
}

const initialState: UISliceModel = {
 currentTheme: getInitialTheme(),
 loading: false,
 hasError: false,
 errorMessage: '',
};

//*> Creación del slice que administra el estado del UI en el store global
export const uiSlice = createSlice({
 name: 'ui',
 initialState,
 reducers: {
  //*> Acción para cambiar el tema actual de la aplicación
  changeToTheme: (state, action: PayloadAction<string>) => {
   state.currentTheme = action.payload;
   if (typeof window !== 'undefined') {
    localStorage.setItem('theme', action.payload);
   }
  },
 },
});

export const { changeToTheme } = uiSlice.actions;
