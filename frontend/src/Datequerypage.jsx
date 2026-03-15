import { useState } from 'react'
import './App.css'

function Querypage({ onBack }) {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  return (
    <section id="center">
      <div className="hero"></div>
      <div className="menulaatikko">
      <h1>Search all data from a chosen day</h1>
      <label htmlFor="location">Choose location:</label>
      <select
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">-- Select sensor location --</option>
        <option value="2975">2975: Vartiokylä, Huivipolku</option>
        <option value="2998">2998: Leppävaara 4</option>
        <option value="4529">4529: Tikkurila 3</option>
        <option value="4588">4588: Mannerheimintie</option>
        <option value="4593">4593: Kallio 2</option>
        <option value="9287">9287: Mäkelänkatu</option>
      </select>
      
      <label htmlFor="measurementDate">Choose a date from January 2024:</label>
      <input
        id="measurementDate"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min="2024-01-01"
        max="2024-01-31"
      />

      <button className="myButton" onClick={onBack}>
        QUERY
      </button>
      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </div>
    </section>
  )
}

export default Querypage
