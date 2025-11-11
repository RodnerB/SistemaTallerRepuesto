import Header from '../components/Header.jsx'
import { useState } from 'react'
import NuevaVenta from '../components/NuevaVenta.jsx'
import './Venta.css'
import { ventaButtons } from '../constants/buttons.js'
export default function Venta(){
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const handleOpenModal = () => setIsModalOpen(true)
    const handleCloseModal = () => setIsModalOpen(false)
   
    const ventaTitle = "Nueva venta"
    const [principalBtn, secundaryBtn] = ventaButtons(handleOpenModal)
    return (
        <main className="main">
            <Header title={ventaTitle} principalBtn={principalBtn} secundaryBtn={secundaryBtn}/>
            { isModalOpen && <NuevaVenta onClose={handleCloseModal}/>}
        </main>
    )
}