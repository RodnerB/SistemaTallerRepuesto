import Header from '../components/Header.jsx';
import Salir from '../utils/Salir.jsx';
import './Venta.css';
export default function Venta(){
    const ventaTitle = "Nueva venta";
    return (
        <main className="main">
            <Header title={ventaTitle}/>
            <section className='product-selector container'>
                <header className='product-header'>
                    <section className='title-header'>
                        <h3>Añadir Productos</h3>
                        <Salir/>
                    </section>
                    <form className='product-search' role='search'>
                        <label className='search' htmlFor="product">Buscar Productos</label>
                        <input id="product"  className="product-input" name="product" type="text" placeholder='Buscar producto...'/>
                    </form>
                </header>            
            </section>
        </main>
    )
}