import { useState } from 'react'
import '../components/App.css'
import InfoTooltip from '../components/InfoTooltip.jsx'

function Selectpage({ onBack, onSelect }) {

  return (
    <section id="center">
      
      <h1>Choose your query:</h1>
      <div className="menulaatikko">
        <h2>Get sensor location data by day <InfoTooltip text="ORIGINAL TASK DESCRIPTION: “Create an endpoint for retrieving one day of measurements for a selected location. The day must be user-selectable.” ">i</InfoTooltip></h2>
        <button className="menuButton" onClick={() => onSelect("date")}>
          START
        </button>
        </div>
        <div className="menulaatikko">
        <h2>Search the number of measurements by location <InfoTooltip text="ORIGINAL TASK DESCRIPTION: “Create an endpoint that can be used to fetch the total number of all measurements for a selected measurement location.” ">i</InfoTooltip></h2>
      <button className="menuButton" onClick={() => onSelect("measurements")}>
        START
      </button>
      </div>
      <div className="menulaatikko">
        <h2>Get measurement mean value by location, sensor and date<InfoTooltip text="ORIGINAL TASK DESCRIPTION: “Create an endpoint that calculates the daily average measurement for a selected location and sensor. The day must be selectable in addition to the sensor location and sensor.” ">i</InfoTooltip></h2>
      <button className="menuButton" onClick={() => onSelect("sensors")}>
        START
      </button>
      </div>
      <button className="myButton" onClick={onBack}>
        RETURN
      </button>
    
    </section>
  )
}

export default Selectpage
