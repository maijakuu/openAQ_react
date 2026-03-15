import './App.css'

function Frontpage({ onStart }) {
  return (
    <section id="center">
      <div className="hero"></div>
      <div className="laatikko">
        <h1>OpenAQ Database Search</h1>
        <h2>Advanced Data Management</h2>
        <h4>Course project 2026</h4>
        <h4>@maijakuu</h4>

        <button className="myButton" onClick={onStart}>
          START
        </button>
      </div>
    </section>
  )
}

export default Frontpage
