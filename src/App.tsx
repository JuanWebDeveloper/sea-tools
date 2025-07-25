import { useState } from 'react';
import { Provider } from 'react-redux';
import { appStore } from '@/lib/store';
import { AppLayout, HeroSection, PelCalculatorModal } from '@/components';

function App() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 return (
  <Provider store={appStore}>
   <AppLayout>
    <HeroSection onOpenModal={() => setIsModalOpen(true)} />
    <PelCalculatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
   </AppLayout>
  </Provider>
 );
}

export default App;
