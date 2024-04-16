import 'bootstrap/dist/css/bootstrap.min.css'
import '../App/App.css'
import Navbar from '../../Componentes/navbar/NavbarProfesor'
import { NavLink } from 'react-router-dom'

const Postulantes = () => {
  return (
    <div className='principal'>
      <Navbar />

      <div className='container Componente'>
        <div className='row'>Pendiente de implementar</div>

        <div className='row'>
          <NavLink to='/' className='btn color-btn'>
            {' '}
            Volver{' '}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Postulantes
