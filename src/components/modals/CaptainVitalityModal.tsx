import { useState } from 'react';
import { captainsVitality } from '@/lib/utils/captainsVitality';

const captains = {
 outcast: captainsVitality.outcast,
 harmless: captainsVitality.harmless,
 dangerous: captainsVitality.dangerous,
 elite: captainsVitality.elite,
};

interface Props {
 isOpen: boolean;
 onClose: () => void;
}

export const CaptainVitalityModal = ({ isOpen, onClose }: Props) => {
 const [type, setType] = useState<'outcast' | 'harmless' | 'dangerous' | 'elite'>('outcast');
 const [selected, setSelected] = useState(1);

 const data = captains[type].find((c) => c.nivelCapitan === selected);

 return (
  <div className={`modal-backdrop ${isOpen ? 'active' : ''}  captain-vitality-modal`} onClick={onClose}>
   <div className={`modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
    <div className='modal-content'>
     <div className='modal-header'>
      <h2>⚓ Vitalidad de Capitanes </h2>
      <button className='close-modal' onClick={onClose}>
       &times;
      </button>
     </div>

     <div className='tabs'>
      <button className={`tab-button ${type} ${type === 'outcast' ? 'active' : ''}`} onClick={() => setType('outcast')}>
       Paria
      </button>
      <button className={`tab-button ${type} ${type === 'harmless' ? 'active' : ''}`} onClick={() => setType('harmless')}>
       Inofensivo
      </button>
      <button className={`tab-button ${type} ${type === 'dangerous' ? 'active' : ''}`} onClick={() => setType('dangerous')}>
       Peligroso
      </button>
      <button className={`tab-button ${type} ${type === 'elite' ? 'active' : ''}`} onClick={() => setType('elite')}>
       Elite
      </button>
     </div>

     <div className='levels'>
      {captains[type].map((c) => (
       <button key={c.nivelCapitan} className={`${selected === c.nivelCapitan ? `active ${type}` : ''}`} onClick={() => setSelected(c.nivelCapitan)}>
        {c.nivelCapitan}
       </button>
      ))}
     </div>

     <div className={`vitality-list ${type}`}>
      <table>
       <thead>
        <tr>
         <th>Nivel</th>
         <th>Vitalidad</th>
        </tr>
       </thead>
       <tbody>
        {data?.vitalidad.map((v, i) => (
         <tr key={i}>
          <td>{i + 1}</td>
          <td>{v}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </div>
 );
};
