import React, { useState } from 'react'

export default function AddNumer() {

  const [count, setCount] = useState(1)
  
  const handlAdd = () => {
    setCount((perv) => 
      perv + 1
    )
  }

  return (
    <div className="w-50 flex flex-col items-center justify-center gap-4 ">
      {count}
      <button className="w-20 p-4 text-white bg-blue-600 cursor-pointer" onClick={(e) => setCount(count +1)}>add</button>
      {/* <button className="w-20 p-4 text-white bg-blue-600 cursor-pointer" onClick={handlAdd}>add</button> */}
    </div>
  )
}
