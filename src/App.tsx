import { Provider } from 'react-redux';
import { appStore } from '@/lib/store';
import { AppLayout, HeroSection } from '@/components';

function App() {
 return (
  <Provider store={appStore}>
   <AppLayout>
    <HeroSection />
   </AppLayout>
  </Provider>
 );
}

export default App;
