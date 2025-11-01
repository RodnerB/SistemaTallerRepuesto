import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Layout from './layout/Layout.jsx'

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
