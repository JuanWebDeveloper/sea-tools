import { PelCalculatorForm } from './PelCalculatorForm';

interface Props {
 isOpen: boolean;
 onClose: () => void;
}

export const PelCalculatorModal = ({ isOpen, onClose }: Props) => {
 return (
  <div className={`modal-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
   <div className={`modal ${isOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
    <div className='modal-content'>
     <div className='modal-header'>
      <h2>Calculadora de PEL</h2>
      <button className='close-modal' onClick={onClose}>
       &times;
      </button>
     </div>
     <div className='modal-body'>
      <PelCalculatorForm />
     </div>
    </div>
   </div>
  </div>
 );
};
