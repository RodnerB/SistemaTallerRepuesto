import { useState } from 'react'
import './Main.css'
import ShoppingCart from '../assets/ShoppingCart.jsx';
import PlusIcon from '../assets/PlusIcon.jsx';
import Header from '../components/Header.jsx';
function Main() {
    const principalBtn = {
        icon: ShoppingCart,
        text: 'Nueva Venta'
    }
    const secundaryBtn = {
        icon: PlusIcon,
        text: 'Nuevo Producto'
    }
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