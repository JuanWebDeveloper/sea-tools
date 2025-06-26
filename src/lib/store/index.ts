//*> Store centralizado de la aplicación
export { appStore, type RootState, type AppDispatch } from './app-store';
//*> Hooks personalizados para acceder y manipular el estado global
export { useSelectorAppStore } from './hooks/use-selector';
export { useDispatchAppStore } from './hooks/use-dispatch';
