import { useState } from 'react'
import '../components/App.css'
import InfoTooltip from '../components/InfoTooltip.jsx'

function Meanpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')
  const [sensor, setSensor] = useState('')

  return (
    <section id="center">
    <div className="titleblock">
    <h1>Get measurement mean values by location and sensor</h1>
    </div>

      <div className="laatikko">
                                <InfoTooltip text={`NO2: Nitrogen dioxide.
                                O3: Ozone.
                                PM10: Particulate matter 10 micrometers or smaller.
                                PM25: Fine particulate matter 2.5 micrometers or smaller.
                                SO2: Sulfur dioxide.`}>i</InfoTooltip>
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

        <div className="labelRow">
          <label htmlFor="sensor">Choose sensor type:</label>
        </div>
        
        <select
          id="sensor"
          value={sensor}
          onChange={(e) => setSensor(e.target.value)}
        >
          <option value="">-- Select sensor type --</option>
          <option value="no2">NO₂</option>
          <option value="o3">O₃</option>
          <option value="pm10">PM10</option>
          <option value="pm25">PM2.5</option>
          <option value="so2">SO₂</option>
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

export default Meanpage
