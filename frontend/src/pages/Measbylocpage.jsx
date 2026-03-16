import { useState } from 'react'
import '../components/App.css'

function Measbylocpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')

  return (
    <section id="center">
      <div className="hero"></div>

      <h1>Search all data  by sensor</h1>
      <div className="laatikko">
      
      <label htmlFor="location">Choose location:</label>
      <select className="selectmenu"
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
      
      <button className="menuButton" onClick={onBack}>
        QUERY
      </button>
    </div>
      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </section>
  )
}

export default Measbylocpage