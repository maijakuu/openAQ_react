import { useState } from 'react'
import Frontpage from './pages/Frontpage.jsx'
import Selectpage from './pages/Selectpage.jsx'
import Datequerypage from './pages/Datequerypage.jsx'

function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "home") {
    return <Frontpage onStart={() => setScreen("menu")} />;
  }

  if (screen === "menu") {
    return (
      <Selectpage
        onBack={() => setScreen("home")}
        onSelect={(choice) => setScreen(choice)}
      />
    );
  }

  if (screen === "date") {
    return <Datequerypage onBack={() => setScreen("menu")} />;
  }

  return <Frontpage onStart={() => setScreen("menu")} />;
}

export default App;