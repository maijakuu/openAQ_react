import { useState } from 'react'
import Frontpage from './Frontpage.jsx'
import Querypage from './Querypage.jsx'

function App() {
  const [showQuery, setShowQuery] = useState(false)

  return (
    <>
      {showQuery ? (
        <Querypage onBack={() => setShowQuery(false)} />
      ) : (
        <Frontpage onStart={() => setShowQuery(true)} />
      )}
    </>
  )
}

export default App