import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//importar componentes
import PaginaEjemplo from '../Paginas/PaginaEjemplo/PaginaEjemplo';
import App from '../Paginas/App/App';

export const Rutas = () => {
  return (
      <Router>
        <Routes>
            {/*Añadir rutas de componentes*/}
            <Route exact path="/" element={<App />} />
            <Route path="/PaginaEjemplo" element={<PaginaEjemplo />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
