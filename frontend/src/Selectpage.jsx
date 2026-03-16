import { useState } from 'react'
import './App.css'

function Selectpage({ onBack, onSelect }) {

  return (
    <section id="center">
      <div className="hero"></div>
      
      <h1>Choose your query:</h1>
      <div className="menulaatikko">
        <h2>Get sensor location data by day</h2>
        <button className="menuButton" onClick={() => onSelect("date")}>
          START
        </button>
        </div>
        <div className="menulaatikko">
        <h2>Get the measurement amount by sensor location </h2>
      <button className="menuButton" onClick={onBack}>
        START
      </button>
      </div>
      <div className="menulaatikko">
        <h2>Get measurement mean by location and sensor</h2>
      <button className="menuButton" onClick={onBack}>
        START
      </button>
      </div>
      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    
    </section>
  )
}

export default Selectpage
