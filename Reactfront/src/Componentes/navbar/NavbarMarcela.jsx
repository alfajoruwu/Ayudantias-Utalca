import './Navbar.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <nav className='navbar navbar-expand-lg custom-navbar-color'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div
            className='collapse navbar-collapse'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav'>
              <NavLink
                to='/PaginaEjemplo'
                className='btn color-btn'
              >
                {' '}
                Horas asignadas{' '}
              </NavLink>
              <NavLink
                to='/PaginaEjemplo'
                className='btn color-btn '
              >
                {' '}
                Difucion{' '}
              </NavLink>
              <NavLink
                to='/PaginaEjemplo'
                className='btn color-btn'
              >
                {' '}
                Ayudantes{' '}
              </NavLink>
              <NavLink
                to='/PaginaEjemplo'
                className='btn color-btn'
              >
                {' '}
                Resolucion{' '}
              </NavLink>
            </div>
          </div>

          <div className=''>
            <div className='container'>
              <div className='row'>
                <a className='colorTexto ' href='#'>
                  Bienvenido
                </a>
              </div>
              <div className='row '>
                <a
                  className='colorTextoGris'
                  href='/PublicarAyudantias'
                >
                  Usuario actual
                </a>
              </div>
            </div>
          </div>
          <div className='iconoperfil' />
        </div>
      </nav>

      <div className='lineaCeleste' />
    </div>
  )
}

export default Navbar
