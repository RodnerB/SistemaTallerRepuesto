import Header from '../components/Header.jsx';

import ShoppingCart from '../assets/ShoppingCart.jsx';
import NuevaVenta from '../components/NuevaVenta.jsx';
import './Venta.css';
export default function Venta(){
    const ventaTitle = "Nueva venta";
    const botones = [
        {
            icon: ShoppingCart,
            text: 'Nueva Venta'
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
            <NuevaVenta/>
        </main>
    )
}