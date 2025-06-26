import { Provider } from 'react-redux';
import { appStore } from '@/lib/store';
import '@/styles/main.scss';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
 return (
  <Provider store={appStore}>
   <main className={`main-content dark-theme`}>{children}</main>
  </Provider>
 );
};
