import { type Dispatch } from '@reduxjs/toolkit';
import { useDispatchAppStore } from '../use-dispatch';
import { changeToTheme } from '../../slices/ui-slice';

//*> Hook que centraliza las acciones de gestión del estado de la interfaz de usuario
export const useUIActions = () => {
 const dispatch: Dispatch = useDispatchAppStore();

 //*> Despacha la acción para cambiar el tema de la aplicación en el estado global
 const actionToggleTheme = (requestedTheme: string) => dispatch(changeToTheme(requestedTheme));

 return {
  actionToggleTheme,
 };
};
