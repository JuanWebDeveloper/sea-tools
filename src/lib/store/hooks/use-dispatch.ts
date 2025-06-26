import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/lib/store';

//*> Hook personalizado para despachar acciones al estado global con tipado estricto
export const useDispatchAppStore = () => useDispatch<AppDispatch>();
