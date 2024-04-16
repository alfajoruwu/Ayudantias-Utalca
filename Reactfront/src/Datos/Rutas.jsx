import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// importar componentes
import PaginaEjemplo from '../Paginas/PaginaEjemplo/PaginaEjemplo'
import DatosProfesor from '../Paginas/Profesor/DatosProfesor'
import Postulantes from '../Paginas/Profesor/Postulantes'
import PublicarAyudantias from '../Paginas/Profesor/PublicarAyudantias'
import App from '../Paginas/App/App'

export const Rutas = () => {
  return (
    <Router>
      <Routes>
        {/* Añadir rutas de componentes */}
        <Route exact path='/' element={<App />} />
        <Route path='/PaginaEjemplo' element={<PaginaEjemplo />} />
        <Route path='/DatosProfesor' element={<DatosProfesor />} />
        <Route path='/Postulantes' element={<Postulantes />} />
        <Route
          path='/PublicarAyudantias'
          element={<PublicarAyudantias />}
        />
      </Routes>
    </Router>
  )
}

export default Rutas
