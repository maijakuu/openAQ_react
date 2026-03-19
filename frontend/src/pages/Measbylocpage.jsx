import { useState, useEffect } from 'react'
import '../components/App.css'

function Measbylocpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')
  const [locations, setLocations] = useState([])
  const [error, setError] = useState(null)
  const [count, setCount] = useState(null)

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

  async function handleQuery() {
    if (!location) {
      setError('Choose a location first')
      return
    }

    try {
      setError(null)
      const response = await fetch(`http://localhost:8000/api/v1/count_location/${location}`)
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      const data = await response.json()
      setCount(data[0].measurement_count)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section id="center">

      <h1>Search all data  by sensor</h1>
      <div className="laatikko">
      
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
      
      <button className="menuButton" onClick={handleQuery}>
        QUERY
      </button>

        {count !== null && <p>Measurement count: {count}</p>}
        {error && <p>Error: {error}</p>}

    </div>
      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </section>
  )
}

export default Measbylocpage