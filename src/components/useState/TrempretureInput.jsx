import React from 'react'

export default function TrempretureInput({temperature, setTemperature}) {

  const onTemperatureChange = (e) => {
    setTemperature(e)
  }
  return (
    <div>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="Enter temperature"
        className='p-3 w-40 border' 
      />
    </div>
  )
}
