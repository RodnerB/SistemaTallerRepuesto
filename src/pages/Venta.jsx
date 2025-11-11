import Header from '../components/Header.jsx';
import { useState } from 'react';
import ShoppingCart from '../assets/ShoppingCart.jsx';
import NuevaVenta from '../components/NuevaVenta.jsx';
import './Venta.css';
export default function Venta(){
    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const handleOpenModal = () => setIsModalOpen(true);
    

    const handleCloseModal = () => setIsModalOpen(false);
   
    const ventaTitle = "Nueva venta";
    const botones = [
        {
            icon: ShoppingCart,
            text: 'Nueva Venta',
            action: handleOpenModal

        },
        {
            icon: null,
            text: 'Cobrar Factura'
        }
    ]
    const [principalBtn, secundaryBtn] = botones;
    return (
        <main className="main">
            <Header title={ventaTitle} principalBtn={principalBtn} secundaryBtn={secundaryBtn}/>
            { isModalOpen && <NuevaVenta onClose={handleCloseModal}/>}
        </main>
    )
}