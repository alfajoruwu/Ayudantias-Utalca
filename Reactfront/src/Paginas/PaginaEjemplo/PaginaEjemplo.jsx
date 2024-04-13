import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';
import Tablaejemplo from '../../Componentes/Tablaejemplo/Tablaejemplo';
import { DataContext } from '../../Datos/DataContext';
import { useContext } from 'react';
import Navbar from '../../Componentes/navbar/NavbarMarcela';
import { Link ,NavLink } from 'react-router-dom';
import React from 'react'
import Ejemplo from '../../Componentes/Ejemplo/Ejemplo';

const PaginaEjemplo = () => {
  
  return (
    <div class="principal">

      <Navbar />
      
      <div  class="container Componente">
        
        <div class="row">
          Este es el ejemplo 2 de como crear un componente
        </div>

        <div class="row">
          <NavLink to="/" className="btn color-btn"> ir a ejemplo 1 </NavLink>
        </div>

      </div>    
    
    </div>
  )
}

export default PaginaEjemplo