import { useState } from 'react'
import './Main.css'
import ShoppingCart from '../assets/ShoppingCart.jsx';
import PlusIcon from '../assets/PlusIcon.jsx';
import Header from '../components/Header.jsx';
function Main() {
    const botones = [
        {
            icon: ShoppingCart,
            text: 'Nueva Venta'
        },
        {
            icon: PlusIcon,
            text: 'Nuevo Producto'
        }
    ]
    const [principalBtn, secundaryBtn] = botones;
    return (
        <main className='main'>
            <Header title="DashBoard" 
            principalBtn={principalBtn} 
            secundaryBtn={secundaryBtn}
            />
        </main>
    )

}

export default Main;