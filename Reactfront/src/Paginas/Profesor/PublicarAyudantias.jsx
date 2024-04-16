import 'bootstrap/dist/css/bootstrap.min.css'
import '../App/App.css'
import Navbar from '../../Componentes/navbar/NavbarProfesor'
import { NavLink } from 'react-router-dom'
import Tabla from '../../Componentes/Tablaejemplo/Tabla'

const PublicarAyudantias = () => {
  const titulos = {
    Asignatura: 'Asignatura',
    Nayudantes: 'N° Ayudantes',
    HorasTotales: 'Horas totales',
    Vacio: ''
  }
  const rows = [
    {
      Asignatura: 'Introduccion a la programacion - Seccion B',
      Nayudantes: 3,
      HorasTotales: 8
    },
    {
      Asignatura: 'Taller de desarrollo de software - Seccion F',
      Nayudantes: 2,
      HorasTotales: 12
    }
  ]
  return (
    <div className='principal'>
      <Navbar />

      <div className='container Componente'>
        <div className='row'>
          <Tabla titulos={titulos} rows={rows}>
            <Tabla />
          </Tabla>
        </div>

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

export default PublicarAyudantias
