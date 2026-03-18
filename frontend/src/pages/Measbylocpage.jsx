import { useState, useEffect } from 'react'
import '../components/App.css'

function Measbylocpage({ onBack, onSelect }) {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [locations, setLocations] = useState([])
  const [error, setError] = useState(null)

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
        {locations.map((loc) => (
          <option key={loc.location_id} value={loc.location_id}>
            {loc.location_id}: {loc.city}
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

export default Measbylocpage