import { useState } from 'react';
import Salir from '../components/Salir.jsx';
import './NuevaVenta.css';

export default function NuevaVenta(){
    const [isOpen, setIsOpen] = useState(true);
    
    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && (
                <div className='background-modal'>
                    <section className='product-selector container'>
                        <header className='product-header'>
                            <section className='title-header'>
                                <h3>Añadir Productos</h3>
                                <Salir closeModal={handleCloseModal}/>
                            </section>
                            <form className='product-search' role='search'>
                                <label className='search' htmlFor="product">Buscar Productos</label>
                                <input id="product" className="product-input" name="product" type="text" placeholder='Buscar producto...'/>
                            </form>
                        </header>            
                    </section>
                </div>
            )}
        </>
    )
}