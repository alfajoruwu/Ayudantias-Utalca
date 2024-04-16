import './Navbar.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = ({ children, nombreUsuario = 'Anonimo' }) => {
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
            <div className='navbar-nav'>{children}</div>
          </div>

          <div className=''>
            <div className='container'>
              <div className='row colorTexto'>Bienvenido</div>
              <div className='row colorTextoGris'>
                {nombreUsuario}
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
