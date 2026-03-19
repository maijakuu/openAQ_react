import '../components/App.css'
import { MessageCircleQuestionMark, SquareCode, Github, Component, Search, ArrowLeft, Info, Database } from 'lucide-react'
import {  } from 'lucide-react'
function Frontpage({ onStart }) {
  return (
    <section id="center">
      <div className="laatikko">
        <h1>OpenAQ Database Search</h1>
        <h2>Advanced Data Management</h2>
        <h4>Course project 2026</h4>
        <h4><a href="https://github.com/maijakuu" target="_blank" rel="noopener noreferrer"><Github size={25}/>maijakuu</a></h4>
      </div>

      <details className="infopanel" name="frontinfo">
        <summary><MessageCircleQuestionMark size={25}/>What is OpenAQ?</summary>
        <div className="paneltext">
          <p>
            OpenAQ is an open air-quality data platform that collects and
            standardizes pollution measurements from monitoring stations and
            sensors around the world. This application helps users explore that
            data by location and pollutant, making it easier to view air-quality
            measurements and compare values from different sensors.
            This project uses <b>Helsinki</b> as area of interest.
          </p>
        </div>
      </details>

      <details className="infopanel" name="frontinfo">
        
        <summary><Info size={25} />Tech stack  </summary>
        <div className="paneltext">
          <p>
            This project uses <b>React</b> for the frontend, <b>Vite</b> as the frontend dev
            environment, <b>FastAPI</b> for the backend API, and <b>PostgreSQL</b> as the
            database. The database was built using <b>SQLWorkbench</b> and <b>PgAdmin4.</b>
          </p>
        </div>
      </details>

        <details className="infopanel" name="frontinfo">
        <summary><SquareCode size={25}/>The execution of the project</summary>
        <div className="paneltext">
          <p>
The main goal of this project was to build a functional database based on OpenAQ data and develop a frontend capable of executing different SQL queries through API calls.
 My personal objective was to gain practical experience in a React-Vite environment and to learn the use of API calls and API endpoints as comprehensively as possible. 
 I used the course material as a foundation, but I also relied on AI assistance, particularly in frontend development. 
 The final result is a simple web application that can retrieve data from the database and display it in a readable format.

          </p>
        </div>
      </details>

        <details className="infopanel" name="frontinfo">
        <summary><Component size={25}/>Upcoming features and updates (If time allows)</summary>
        <div className="paneltext">
          <p>
            <ul>
              <li>Update on outer appearance, full mobile-responsive layout.</li>
              <li>The possibility for more API-calls, more precise utilization of the database.</li>
              <li>Extending the database to cover more information available on OpenAQ.</li>
              </ul>

</p>
        </div>
      </details>

        <button className="myButton" onClick={onStart}>
          START
        </button>
    </section>
  )
}

export default Frontpage
 