import { Provider } from 'react-redux';
import { appStore } from '@/lib/store';
import { AppLayout } from '@/components';
import { useState } from 'react';

function App() {
 const [theme, setTheme] = useState('dark');

 const handleThemeChange = (theme: string) => {
  setTheme(theme);
 };

 return (
  <Provider store={appStore}>
   <AppLayout>
    <div className='theme-switcher'>
     <button className='btn-outline' onClick={() => handleThemeChange('dark')}>
      Tema Oscuro
     </button>
     <button className='btn-primary' onClick={() => handleThemeChange('light')}>
      Tema Claro
     </button>
    </div>

    <h1>Título Principal de la Aplicación</h1>
    <h2>Esto es un subtítulo para una sección</h2>
    <p>
     Este es un párrafo de texto que describe alguna característica o sección de la página. Sirve para ver cómo contrasta el texto normal con el fondo
     y los títulos.
    </p>
   </AppLayout>
  </Provider>
 );
}

export default App;
