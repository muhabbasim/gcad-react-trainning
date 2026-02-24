import React, { useState } from 'react'
import TermpretureWindow from './TermpretureWindow';
import TrempretureInput from './TrempretureInput';

export default function TempretureCalculator() {

  // Lifting State Up
  const [temperature, setTemperature] = useState(0);

  return (
    <div className='flex gap-10 bg-slate-200 p-10'>
      <TrempretureInput 
        temperature={temperature} 
        setTemperature={setTemperature}
      />
      <TermpretureWindow 
        temperature={temperature}
      />
    </div>
  )
}
