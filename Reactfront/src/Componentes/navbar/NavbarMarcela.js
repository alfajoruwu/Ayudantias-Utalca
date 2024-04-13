
import './Navbar.css'; 
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext,React } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div style={{marginBottom:"2rem"}}>
      <nav class="navbar navbar-expand-lg custom-navbar-color" >
        <div class="container-fluid">
          
          <button class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">  
            
            <div class="navbar-nav">
              
              <NavLink to="/PaginaEjemplo" className="btn color-btn" > Horas asignadas </NavLink>
              <NavLink to="/PaginaEjemplo" className="btn color-btn "> Difucion </NavLink>
              <NavLink to="/PaginaEjemplo" className="btn color-btn"> Ayudantes </NavLink>
              <NavLink to="/PaginaEjemplo" className="btn color-btn"> Resolucion </NavLink>
              
            </div>
          </div>

          <div class="">
            <div class="container">
              <div class="row">
                <a  class="colorTexto " href="#">Bienvenido</a>   
              </div>
              <div class="row ">
                <a  class="colorTextoGris" href="#">Usuario actual</a>   
              </div>
            </div>

          </div>
            <div class="iconoperfil">
          </div>       

        </div>
      </nav>

      <div class="lineaCeleste">
    
      </div>
    </div>


  )
}

export default Navbar