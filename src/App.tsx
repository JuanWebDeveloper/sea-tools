import { useState } from 'react';
import { Provider } from 'react-redux';
import { appStore } from '@/lib/store';
import { AppLayout, HeroSection, PelCalculatorModal } from '@/components';

function App() {
 const [isModalOpen, setIsModalOpen] = useState('');
 return (
  <Provider store={appStore}>
   <AppLayout>
    <HeroSection onOpenModal={(modal: string) => setIsModalOpen(modal)} />
    <PelCalculatorModal isOpen={isModalOpen == 'pel-calculator' ? true : false} onClose={() => setIsModalOpen('')} />
   </AppLayout>
  </Provider>
 );
}

export default App;
