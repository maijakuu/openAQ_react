import { useState, useEffect } from 'react'
import '../components/App.css'
import InfoTooltip from '../components/InfoTooltip.jsx'


function Meanpage({ onBack }) {

  /*const [nykyinen state, setteri(arvoa päivittävä funktio)] = useState(Haluttu lähtöarvo)*/ 
  const [location, setLocation] = useState('')/*Käyttäjän valitsema vaihtoehto*/ 
  const [locations, setLocations] = useState([]) /*Valikkoon tuleva lista*/ 
  const [error, setError] = useState(null)
  const [user_sensor, setSensortype] = useState('')/*Käyttäjän valitsema vaihtoehto*/ 
  const [sensors, setSensortypes] = useState([])/*Valikkoon tuleva lista*/ 
  const [result, setResult] = useState(null)/*keskiarvo alustetaan null*/
  const [user_date, setDate] = useState('')/*Käyttäjän valitsema vaihtoehto*/ 
  const [sensor_unit, setUnit] = useState('')/*Unitin tallennuspaikka*/
  const [sensor_parameter, setParameter] = useState('')
  const [searched, setSearched] = useState(false)
  const tooltipText = [
  'PM2.5: Fine particulate matter, 2.5 micrometers or smaller.\n' +
  'PM10: Particulate matter, 10 micrometers or smaller.\n' +
  'O3: Ozone.\n' +
  'NO2: Nitrogen dioxide.\n' +
  'SO2: Sulfur dioxide.'
  ]
  const tooltipInfo = [`Due to the large number of parameters, the query has been modified to show only the sensors available at each location. Otherwise, most queries would return null, since each location has only specific sensors`]
/*====================================================================================================== */
/*                                       useEffect-API Hookit      
*/
/*=======================================Haetaan sijainnit============================================== */
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

/*======================Haetaan sensorin tyyppi valitun sijainnin mukaan=============================== */
  useEffect(() => {
    async function fetchSensortypes() {
      if (!location){
        setSensortypes([]) 
        setSensortype('')
        setUnit('')
        setResult(null)

        return}
      try {
        setSensortype('')
        setUnit('')
        setResult(null)

        const response = await fetch(`http://localhost:8000/api/v1/specific_sensor/${location}`)
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setSensortypes(data)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchSensortypes()}, [location])

  /*===============================Haetaan sensorin käyttämä yksikkö======================================= */
  
    useEffect(() => {
    async function fetchSensorUnit() {
      if (!user_sensor){
        setUnit('') 
        return}
      try {
        const response = await fetch(`http://localhost:8000/api/v1/sensor_unit/${user_sensor}`)
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setUnit(data.sensor_unit)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchSensorUnit()}, [user_sensor])

/*===========================Haetaan sensorin parametri======================================================= */

    useEffect(() => {
    async function fetchSensorParameter() {
      if (!user_sensor){
        setParameter('') 
        return}
      try {
        const response = await fetch(`http://localhost:8000/api/v1/sensor_parameter/${user_sensor}`)
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }
        const data = await response.json()
        setParameter(data.sensor_parameter)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchSensorParameter()}, [user_sensor])


  /*====================================================================================== */
/*                                     Tehdään Query                                        */
  /*====================================================================================== */

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
/*====================================================================================== */

  return (
    <section id="center">
    <div className="titleblock">
    <h1>Get measurement mean values by location, sensor and date</h1>
    </div>

      <div className="laatikko">
                                <InfoTooltip text={tooltipInfo}>i</InfoTooltip>
        <label htmlFor="location">Choose location by ID:</label>
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
        
        {result !== null && <p>Mean value: {Number(result).toFixed(2)} {sensor_unit}</p>}
        {searched && result !== null && <p>Parameter: {sensor_parameter}<InfoTooltip text={tooltipText}>i</InfoTooltip></p>}
        {error && <p>Error: {error}</p>}

      </div>

      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    </section>
  )
}

export default Meanpage
