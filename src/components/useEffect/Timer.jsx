import React, { useEffect, useState } from 'react'

export default function Timer() {

  const [seconds, setSeconds] = useState(0)
  const [timeState, setTimeState] = useState(false)

  // side effects
  useEffect(() => {

    let timer;

    if ( timeState ){
      timer = setInterval(() => {
        setSeconds(perv => perv + 1)
      }, 1000)
    }

    // clean up 
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [timeState]) // Empty dependency array = runs once on mount

  return (
    <section className='flex gap-4'>
      <div className='bg-teal-700 text-white p-4'>
        Timer: {seconds}
      </div>

      <button
        className='p-2 bg-lime-200 cursor-pointer'
        onClick={() => setTimeState(per => !per)}
      >
        Start Timer
      </button>
    </section>
  )
}
