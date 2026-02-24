import React from 'react'
import './button.css'
export default function Button({ label, style, className, func }) {
  return (
    <button 
      className={className}
      style={style}
      onClick={func}
    >
      {label}
    </button>
  )
}
