import * as React from 'react'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function Row (props) {
  const { row } = props
  // Este estado se utiliza para controlar el Collapse de la primera fila.
  const [open, setOpen] = React.useState(false)
  // Este estado controlará el Collapse de las celdas individuales.
  const [openCells, setOpenCells] = React.useState(
    Array.from({ length: row.Nayudantes }, () => false)
  )

  // Función para manejar el clic en una celda individual
  const toggleCell = (index) => {
    setOpenCells(openCells.map((open, cellIndex) => (index === cellIndex ? !open : open)))
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
        {Object.keys(row).map((key, index) => (
          <TableCell key={index}>{row[key]}</TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  {Array.from({ length: row.Nayudantes }, (_, index) => (
                    <React.Fragment key={index}>
                      <TableRow onClick={() => toggleCell(index)}>
                        <TableCell>{row.Asignatura}</TableCell>
                        <TableCell>
                          <input type='text' />
                        </TableCell>
                      </TableRow>
                      {/* Aquí se agrega otro Collapse para la información de la celda */}
                      <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                          <Collapse in={openCells[index]} timeout='auto' unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Table size='small' aria-label='purchases'>
                                <TableBody>
                                  <TableRow className='container'>
                                    <TableCell className='col'>
                                      <div className='row'>
                                        Disponibilidad
                                      </div>
                                      <div className='row'>
                                        <input type='text' />
                                      </div>
                                    </TableCell>
                                    <TableCell className='col'>
                                      <div className='row'>
                                        Nota minima
                                      </div>
                                      <div className='row'>
                                        <input type='text' />
                                      </div>
                                    </TableCell>
                                    <TableCell className='col'>
                                      <div className='row'>
                                        Tareas
                                      </div>
                                      <div className='row'>
                                        <input type='text' />
                                      </div>
                                    </TableCell>
                                    <TableCell className='col'>
                                      <div className='row'>
                                        Otros
                                      </div>
                                      <div className='row'>
                                        <input type='text' />
                                      </div>
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default function Tabla ({ rows, titulos }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            {Object.keys(titulos).map((titulo, index) => (
              <TableCell key={index}>{titulos[titulo]}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.Asignatura} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
