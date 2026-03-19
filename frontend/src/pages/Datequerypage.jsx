import { useState, useEffect } from 'react'
import '../components/App.css'

function Querypage({ onBack }) {
  const [location, setLocation] = useState('') /*Käyttäjäsyöte*/ 
  const [user_date, setDate] = useState('') /*Käyttäjäsyöte*/ 
  const [locations, setLocations] = useState([]) /*Databasen locations listana*/ 
  const [error, setError] = useState(null)
  const [results, setResults] = useState([])/*Databasen tulokset listana*/

  useEffect(() => {

  async function fetchLocations() {/*Haetaan Locations databasesta*/
    try {
      const response = await fetch('http://localhost:8000/api/v1/locations')/*Kutsutaan endpointia*/
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

  async function handleQuery() { /*Tehdään query databasesta*/
    if (!location || !user_date) { /*If NOlocation OR NOdate*/ 
      setError('Choose a location and date first')
      return
    }

    try {
      setError(null)

      const response = await fetch(`http://localhost:8000/api/v1/location_by_date/${location}/${user_date}`)/*Kutsutaan endpointia*/
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }

      const data = await response.json()
      setResults(data) /*Tämä state jotta saadaan tulokset renderöitya*/
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section id="center">

      <h1>Search all data from a chosen day</h1>
      <div className="laatikko">
      
      <label htmlFor="location">Choose location:</label>
      <select className="selectmenu"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
          <option value="">-- Select sensor location --</option>
          {locations.map((loc) => (
            <option key={loc.location_id} value={loc.location_id}> {/* Otetaan location id ja käytetään sitä määräävänä arvona ja valuena. value tallennetaan myöhempää käyttöä varten */}
           {loc.location_id}: {loc.city}  {/* Tämä näytetään käyttäjälle */}
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
    </div>

      <button className="myButton" onClick={onBack}>
        RETURN
      </button>

       {error && <p>Error: {error}</p>} {/*Jos errorilla on oikea errorkoodi, renderöidään <p> sisällä olevat osuudet. Muuten tyhjä.*/}

          {results?.length > 0 && (
            <div className="results-table-wrap">
              <table className="results-table">
                <thead>
                  <tr>
                    <th scope="col">Location ID</th>
                    <th scope="col">Sensor type ID</th>
                    <th scope="col">Time</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((row, index) => ( /* mappaa database läpi, row= item, index= itemin numero */
                    <tr key={row.id ?? index}> {/* Käytä rowid key:na, muuten käytä indexiä */}
                      <td>{row.location_id}</td>
                      <td>{row.sensors_id}</td>
                      <td>{new Date(row.datetime).toLocaleTimeString('fi-FI', {hour: '2-digit',minute: '2-digit', second: '2-digit'})}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

    </section>
  )
}
export default Querypage
