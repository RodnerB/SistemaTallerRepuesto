import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Aside />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<h1>Error 404: Erick t el chino son gay</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
