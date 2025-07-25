import { useSelectorAppStore, useUIActions } from '@/lib/store';
import { useHydratedTheme } from '@/lib/hooks/useHydratedTheme';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import '@/styles/main.scss';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
 const { currentTheme } = useSelectorAppStore((state) => state.ui);
 const { actionToggleTheme } = useUIActions();

 const isHydrated = useHydratedTheme(currentTheme);

 if (!isHydrated) return <LoadingSpinner />;

 return (
  <main className={`main-content ${currentTheme}-theme`}>
   <div className='theme-switcher'>
    <button className='btn-outline' onClick={() => actionToggleTheme('dark')}>
     Tema Oscuro
    </button>
    <button className='btn-primary' onClick={() => actionToggleTheme('light')}>
     Tema Claro
    </button>
   </div>
   {children}
  </main>
 );
};
