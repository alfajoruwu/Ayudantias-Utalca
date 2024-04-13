//React
import { useContext,React } from 'react';
import { NavLink } from 'react-router-dom';

//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../../index.css'

//variables glovales
import { DataContext } from '../../Datos/DataContext';

//componentes

import Navbar from '../../Componentes/navbar/NavbarMarcela';
import Ejemplo from '../../Componentes/Ejemplo/Ejemplo';

function App() {

  return (
    <>
    <div class="principal">
      <Navbar />
      <Ejemplo/>
    </div>
    </>
  );
}

export default App;
