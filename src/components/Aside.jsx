import { useState } from 'react'
import './Aside.css'
import Module from './module'
import { NavLink } from 'react-router-dom'
function Aside() {

    const modules = [
        {
            name: 'Inicio',
            icon: 'home',
            path: '/'
        },
        {
            name: 'Productos',
            icon: 'products',
            path: '/products'
        },
        {
            name: 'Clientes',
            icon: 'clients',
            path: '/clients'
        },
        {
            name: 'Ventas',
            icon: 'sales',
            path: '/sales'
        },
        {
            name: 'Compras',
            icon: 'buy',
            path: '/purchases'
        },
        {
            name: 'Reportes',
            icon: 'reports',
            path: '/reports'
        }
    ]

    return (
        <aside>
            <header>
                <h2>
                    Electromecanica y AutoRepuesto Neno
                </h2>
            </header>
            <main>
                <NavLink to="/" className={({ isActive }) => ` module ${isActive ? "active" : ""}`} >
                    <h4>Electromecanica y AutoRepuesto Neno</h4>
                </NavLink>
                {modules.map((module) => (
                    <Module key={module.name} name={module.name} icon={module.icon} path={module.path} />
                ))}
            </main>
            <footer>
                <a href="/login">Cerrar sesión</a>
            </footer>
        </aside>
    )
}

export default Aside;