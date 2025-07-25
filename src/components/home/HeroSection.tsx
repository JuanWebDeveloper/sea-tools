export const HeroSection = ({ onOpenModal }: { onOpenModal: () => void }) => {
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
    <button className='tool-button' onClick={onOpenModal}>
     <h3>🧮🏅 Calculadora de PEL</h3>
     <p>Calcula puntos elite basados en disparos y tiempo</p>
    </button>
   </div>
  </section>
 );
};
