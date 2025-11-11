import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import Layout from './layout/Layout.jsx'
import NotFound from './pages/404.jsx'
import Venta from './pages/Venta.jsx'
import Inventario from './pages/Inventario.jsx'

// Detectar si estamos en Electron
const isElectron = typeof window !== 'undefined' && window.electronAPI?.isElectron

function App() {
  // Usar HashRouter para Electron, BrowserRouter para web
  const Router = isElectron ? HashRouter : BrowserRouter
  
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
