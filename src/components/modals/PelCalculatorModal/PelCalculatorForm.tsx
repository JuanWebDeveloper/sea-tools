import React, { useState } from 'react';
import { calculatePelPoints } from '@/lib/helpers';

export const PelCalculatorForm = () => {
 const [form, setForm] = useState({ pointsPerShot: 0, shootingInterval: 1, timeInHours: 1 });
 const [results, setResults] = useState<{ totalPoints: number; pointsPerHour: number } | null>(null);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { id, value } = e.target;
  setForm({ ...form, [id]: Number(value) });
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const calc = calculatePelPoints(form);
  setResults(calc);
 };

 return (
  <form onSubmit={handleSubmit}>
   <div className='form-group'>
    <label htmlFor='pointsPerShot'>PEL por disparo:</label>
    <input type='number' id='pointsPerShot' value={form.pointsPerShot} onChange={handleChange} required />
   </div>

   <div className='form-group'>
    <label htmlFor='shootingInterval'>Recarga (seg):</label>
    <input type='number' id='shootingInterval' step='0.1' value={form.shootingInterval} onChange={handleChange} required />
   </div>

   <div className='form-group'>
    <label htmlFor='timeInHours'>Tiempo de juego (horas):</label>
    <input type='number' id='timeInHours' value={form.timeInHours} onChange={handleChange} required />
   </div>

   <button className='btn-primary' type='submit'>
    Calcular
   </button>

   {results && (
    <div className='results'>
     <h3>Resultados</h3>
     <p>
      Puntos PEL totales: <strong>{results.totalPoints.toLocaleString('es-ES')}</strong>
     </p>
     <p>
      Puntos PEL por hora: <strong>{results.pointsPerHour.toLocaleString('es-ES')}</strong>
     </p>
    </div>
   )}
  </form>
 );
};
