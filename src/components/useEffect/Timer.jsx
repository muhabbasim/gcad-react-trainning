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
        className={`p-2 bg-lime-200 cursor-pointer ${timeState ? 'bg-red-500 text-white' : 'bg-lime-200 text-black'}`}
        onClick={() => setTimeState(per => !per)}
      >
        {timeState ? "Stop Timer" : "Start Timer"}
      </button>
    </section>
  )
}
