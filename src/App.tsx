import { useState } from 'react';
import './styles/main.scss';

function App() {
 const [theme, setTheme] = useState('dark');

 const handleThemeChange = (theme: string) => {
  setTheme(theme);
 };

 return (
  <main className={`main-content ${theme}-theme`}>
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
  </main>
 );
}

export default App;
