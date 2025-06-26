import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@/lib/store';

//*> Hook personalizado para seleccionar datos del estado global con tipado estricto
export const useSelectorAppStore: TypedUseSelectorHook<RootState> = useSelector;
