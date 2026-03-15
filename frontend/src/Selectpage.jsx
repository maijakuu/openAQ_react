import { useState } from 'react'
import './App.css'

function Selectpage({ onBack, onSelect }) {

  return (
    <section id="center">
      <div className="hero"></div>
      <div className="menulaatikko">
      <h1>Choose your query:</h1>
        <h2>Get sensor location data by day</h2>
        <button className="myButton" onClick={() => onSelect("date")}>
          START
        </button>
        <h2>Get the measurement amount by sensor location </h2>
      <button className="myButton" onClick={onBack}>
        START
      </button>
        <h2>Get measurement mean by location and sensor</h2>
      <button className="myButton" onClick={onBack}>
        START
      </button>

      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </div>
    </section>
  )
}

export default Selectpage
