import React, { useState } from 'react'
import { Table, Collapse } from 'react-bootstrap'

export function Dropdown ({ row }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <tr onClick={() => setOpen(!open)}>
        <td>{row.name}</td>
        <td align='right'>{row.calories}</td>
        <td align='right'>{row.fat}</td>
        <td align='right'>{row.carbs}</td>
        <td align='right'>{row.protein}</td>
      </tr>
      <tr>
        <td colSpan={5}>
          <Collapse in={open}>
            <div>
              <Table striped bordered hover size='sm'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th align='right'>Amount</th>
                    <th align='right'>Total price ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {row.history.map(historyRow => (
                    <tr key={historyRow.date}>
                      <td>{historyRow.date}</td>
                      <td>{historyRow.customerId}</td>
                      <td align='right'>{historyRow.amount}</td>
                      <td align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Collapse>
        </td>
      </tr>
    </>
  )
}
