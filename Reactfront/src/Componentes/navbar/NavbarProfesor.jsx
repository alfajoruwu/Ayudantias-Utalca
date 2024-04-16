import { Navbar } from './Navbar'
import { NavLink } from 'react-router-dom'

const NavbarProfesor = () => {
  return (
    <Navbar nombreUsuario='Profesor'>
      <NavLink
        to='/PublicarAyudantias'
        className={({ isActive }) =>
          'btn color-btn' + (isActive ? ' boton-seleccionado' : '')}
      >
        {' '}
        Publicar{' '}
      </NavLink>
      <NavLink
        to='/Postulantes'
        className={({ isActive }) =>
          'btn color-btn' + (isActive ? ' boton-seleccionado' : '')}
      >
        {' '}
        Postulantes{' '}
      </NavLink>
      <NavLink
        to='/DatosProfesor'
        className={({ isActive }) =>
          'btn color-btn' + (isActive ? ' boton-seleccionado' : '')}
      >
        {' '}
        Datos Personales{' '}
      </NavLink>
    </Navbar>
  )
}

export default NavbarProfesor
