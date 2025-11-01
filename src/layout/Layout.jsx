import { NavLink } from 'react-router-dom'
import './Layout.css'
function Aside() {
    const activeStyle = ( isActive ) => {
        return (` module ${isActive ? "active" : ""}`)
    }
    
    return (
        <aside>
            <header>
                <h2>
                    Electromecanica y AutoRepuesto Neno
                </h2>
            </header>
            <main>
                <NavLink to="/" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Panel Principal</h4>
                </NavLink>
                <NavLink to="/ventas" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Ventas</h4>
                </NavLink>
                <NavLink to="/inventario" className={({ isActive }) => activeStyle(isActive)} >
                    <h4>Inventario</h4>
                </NavLink>

            </main>
        </aside>
    )
}

export default Aside;