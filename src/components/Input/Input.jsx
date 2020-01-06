import React from "react"
import "./Input.scss"

function Input({ placeholder, type, icon }) {
  return (
    <div className={`Input ${type}`}>
      <div className="Input-icon">{icon}</div>
      <input type={type} placeholder={placeholder}/>    
    </div>
  )  
}

export default Input
