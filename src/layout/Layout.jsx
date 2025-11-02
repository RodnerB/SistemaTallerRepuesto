import { NavLink } from 'react-router-dom'
import './Layout.css'
import { CarIcon } from '../assets/CarIcon'

function Aside() {
    const activeStyle = ( isActive ) => {
        return (` modules ${isActive ? "active" : ""}`)
    }
    
    return (
        <aside>
            <header>
                <CarIcon />
                <h2>
                    Taller y Repuesto
                </h2>
            </header>
            <section>
                <h3>Modulos</h3>
                <NavLink to="/" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Panel Principal</h4>
                </NavLink>
                <NavLink to="/ventas" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Ventas</h4>
                </NavLink>
                <NavLink to="/inventario" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Inventario</h4>
                </NavLink>

            </section>
        </aside>
    )
}

export default Aside;