import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Layout from './layout/Layout.jsx'
import NotFound from './pages/404.jsx'

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
