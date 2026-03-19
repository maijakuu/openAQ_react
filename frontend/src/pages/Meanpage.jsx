import { useState, useEffect } from 'react'
import '../components/App.css'
import InfoTooltip from '../components/InfoTooltip.jsx'

function Meanpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')
  const [locations, setLocations] = useState([])
  const [error, setError] = useState(null)
  const [user_sensor, setSensortype] = useState('')
  const [sensors, setSensortypes] = useState([])
  const [result, setResult] = useState(null)/*keskiarvo alustetaan null*/
  const [user_date, setDate] = useState('')
  const [searched, setSearched] = useState(false)

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
        const response = await fetch('http://localhost:8000/api/v1/sensors')
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
  
    async function handleQuery() { /*Tehdään query databasesta*/
    if (!location || !user_date || !user_sensor) { /*If NOlocation OR NOdate*/ 
      setError('Choose a location, date and sensor first')
      return
    }

    try {
      setError(null)
      setSearched(true)

      const response = await fetch(`http://localhost:8000/api/v1/mean/${location}/${user_date}/${user_sensor}`)/*Kutsutaan endpointia*/
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }

      const data = await response.json()
      setResult(data.avg_value) /*Tämä state jotta saadaan tulokset renderöitya*/
    } catch (err) {
      setError(err.message)
    }
  }
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
          <label htmlFor="sensor">Choose sensor by ID:</label>
        </div>
        
        <select className="selectmenu"
          id="sensor"
          value={user_sensor}
          onChange={(e) => setSensortype(e.target.value)}
        >
        <option value="">-- Select sensor --</option>
        {sensors.map((sens) => (
          <option key={sens.sensors_id} value={sens.sensors_id}>
           {sens.sensors_id}
          </option> 
          ))}
        </select>

        <label htmlFor="measurementDate">Choose a date from January 2024:</label>
          <input className="selectmenu"
            id="measurementDate"
            type="date"
            value={user_date} /* tallennettava arvo */
            onChange={(e) => setDate(e.target.value)}
            min="2024-01-01"
            max="2024-01-31"
          />

        <button className="menuButton" onClick={handleQuery}>
          QUERY
        </button>
        
        {searched && result == null && <p>No matching measurements found</p>}
        {result !== null && <p>Mean value: {result}</p>}
        {error && <p>Error: {error}</p>}

      </div>

      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </section>
  )
}

export default Meanpage
