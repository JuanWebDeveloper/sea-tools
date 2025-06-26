//*> Store centralizado de la aplicación
export { appStore } from './app-store';
//*> Tipos derivados del store (estado y acciones)
export type { RootState, AppDispatch } from './app-store';
//*> Hooks personalizados para acceder y manipular el estado global
export { useSelectorAppStore } from './hooks/use-selector';
export { useDispatchAppStore } from './hooks/use-dispatch';
//*> Utilidades usadas por el store global
export { getInitialTheme } from './utils/get-initial-theme';
