import React from 'react'

export default function TermpretureWindow({temperature}) {

  let statement;
  
  if(temperature>= 100) {
    statement = 'The weather is hot'
  } else {
    statement = 'The weather is cold'
  }

  return (
    <div className='bg-sky-600 p-4 w-60 text-white'>
      <p>{statement}</p>
    </div>
  )
}
