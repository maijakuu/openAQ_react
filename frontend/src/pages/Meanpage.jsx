import { useState, useEffect } from 'react'
import '../components/App.css'
import InfoTooltip from '../components/InfoTooltip.jsx'

function Meanpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')
  const [locations, setLocations] = useState([])
  const [error, setError] = useState(null)
  const [sensor, setSensortype] = useState('')
  const [sensors, setSensortypes] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch('http://localhost:8000/api/v1/locations')
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setLocations(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchLocations()
  }, [])

  useEffect(() => {
    async function fetchSensortypes() {
      try {
        const response = await fetch('http://localhost:8000/api/v1/sensor_types')
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setSensortypes(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchSensortypes()
  }, [])
  
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
        <select className="selectmenu"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
        <option value="">-- Select sensor location --</option>
        {locations.map((loc) => (
          <option key={loc.location_id} value={loc.location_id}>
            {loc.location_id}: {loc.city}
          </option> 
          ))}
        </select>

        <div className="labelRow">
          <label htmlFor="sensor">Choose sensor type:</label>
        </div>
        
        <select className="selectmenu"
          id="sensor"
          value={sensor}
          onChange={(e) => setSensortype(e.target.value)}
        >
        <option value="">-- Select sensor parameter --</option>
        {sensors.map((sens) => (
          <option key={sens.sensor_id} value={sens.sensor_id}>
           {sens.parameter}
          </option> 
          ))}
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
