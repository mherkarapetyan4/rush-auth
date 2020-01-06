import React from "react"
import "./Button.scss"

function Button({onClick, title, type, icon }) {
  return (
    <div className={`Button ${type}`} onClick={onClick}>
      {icon}
      <span className="Button-text">{title} </span>
      
    </div>
  )  
}

export default Button

