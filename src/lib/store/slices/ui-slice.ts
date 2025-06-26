import { createSlice } from '@reduxjs/toolkit';

interface UISliceModel {
 currentTheme: string;
 loading: boolean;
 hasError: boolean;
 errorMessage: string;
}

const initialState: UISliceModel = {
 currentTheme: 'dark',
 loading: false,
 hasError: false,
 errorMessage: '',
};

//*> Creación del slice que administra el estado del UI en el store global
export const uiSlice = createSlice({
 name: 'ui',
 initialState,
 reducers: {},
});

export const {} = uiSlice.actions;
