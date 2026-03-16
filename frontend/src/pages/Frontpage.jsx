import '../components/App.css'

function Frontpage({ onStart }) {
  return (
    <section id="center">
      <div className="laatikko">
        <h1>OpenAQ Database Search</h1>
        <h2>Advanced Data Management</h2>
        <h4>Course project 2026</h4>
        <h4><a href="https://github.com/maijakuu" target="_blank" rel="noopener noreferrer">@maijakuu</a></h4>
      </div>

        <div className="infobox">
        <h3>OpenAQ is an open air-quality data platform that collects and standardizes pollution measurements from monitoring stations and sensors around the world. This application helps users explore that data by location and pollutant, making it easier to view air-quality measurements and compare values from different sensors.</h3>
      </div>

        <div className="infobox">
        <h3>This project uses a straightforward web-app stack: React for the frontend, Vite as the frontend dev environment, FastAPI for the backend API, and PostgreSQL as the database. The database was built using SQLWorkbench and pgAdmin4.</h3>
      </div>

        <button className="myButton" onClick={onStart}>
          START
        </button>
    </section>
  )
}

export default Frontpage
 