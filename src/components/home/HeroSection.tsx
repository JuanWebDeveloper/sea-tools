export const HeroSection = ({ onOpenModal }: { onOpenModal: (modal: string) => void }) => {
 return (
  <section className='hero-section'>
   <div className='welcome-banner'>
    <h1>
     <span>AҒω ≈</span> All Of War
    </h1>
    <p>
     Bienvenido a la suite de herramientas del clan <span>AҒω ≈ </span>All Of War. Aquí encontrarás diversas utilidades para optimizar tu juego de
     batallas navales. Selecciona la herramienta que necesites para comenzar.
    </p>
   </div>
   <div className='tools-grid'>
    <button className='tool-button' onClick={() => onOpenModal('pel-calculator')}>
     <h3>🏅🧮 Calculadora de PEL</h3>
     <p>🧮 Calcula puntos elite basados en disparos y tiempo</p>
    </button>
    <button className='tool-button' onClick={() => onOpenModal('captain-vitality')}>
     <h3>⚓❤️‍🔥 Vitalidad de Capitanes</h3>
     <p>❤️‍🔥 Observa la vitalidad potencial de tus capitanes según su nivel y rango.</p>
    </button>
   </div>
  </section>
 );
};
