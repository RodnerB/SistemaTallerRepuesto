import { useState } from 'react'
import './Main.css'
import ShoppingCart from '../assets/shoppingCart';
import PlusIcon from '../assets/plusIcon';
function Main() {
    return (
        <main className='main'>
            <header className='header'>
                <h1>Dashboard</h1>
                <div className="btn-container">
                    <button className='btn btn-principal'>
                        <ShoppingCart/>
                        Nueva Venta
                        </button>
                    <button className='btn btn-secundario'>
                        <PlusIcon/>
                        Nuevo Producto
                        </button>
                    </div>
            </header>
        </main>
    )

}

export default Main;