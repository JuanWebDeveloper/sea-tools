import { useSelectorAppStore } from '@/lib/store';
import '@/styles/main.scss';
import { useHydratedTheme } from '@/lib/hooks/useHydratedTheme';
import { LoadingSpinner } from '../shared/LoadingSpinner';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
 const { currentTheme } = useSelectorAppStore((state) => state.ui);

 const isHydrated = useHydratedTheme(currentTheme);

 if (!isHydrated) return <LoadingSpinner />;

 return <main className={`main-content ${currentTheme}-theme`}>{children}</main>;
};
