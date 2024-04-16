import 'bootstrap/dist/css/bootstrap.min.css'
import '../App/App.css'
import React from 'react'
import Navbar from '../../Componentes/navbar/NavbarMarcela'
import { NavLink } from 'react-router-dom'

const PaginaEjemplo = () => {
  return (
    <div className='principal'>
      <Navbar />

      <div className='container Componente'>
        <div className='row'>
          Este es el ejemplo 2 de como crear un componente
        </div>

        <div className='row'>
          <NavLink to='/' className='btn color-btn'>
            {' '}
            ir a ejemplo 1{' '}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PaginaEjemplo
