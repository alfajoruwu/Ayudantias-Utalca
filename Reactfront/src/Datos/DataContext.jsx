import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const DataContext = createContext()

export function DataContextProvider (props) {
  // aqui van las variables que quieren que sean glovales
  const [Variablerandom, setVariablerandom] = useState('variable global')

  // recuerden exportarlas
  return (
    <DataContext.Provider value={{ Variablerandom, setVariablerandom }}>
      {props.children}
    </DataContext.Provider>
  )
}

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
// forma de usarlo facilito,
// importas esto:
// import { DataContext } from '../variables/DataContext';

// forma de llamarlo (recomendable)
//     const {valorFermona} = useContext(DataContext);
// llamar la variable del datacontext y usarlo tal cual
