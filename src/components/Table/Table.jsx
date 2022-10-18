import { useState } from 'react'

function createData(username, fishLength, fishMultiple, fishResult, points) {
  return { username, fishLength, fishMultiple, fishResult, points }
}

const rows = [
  createData('Wurppe', 28, 1, 28, 25),
  createData('Timo', 26, 1, 26, 18),
  createData('Kimmo', 27, 0.75, 20.25, 12),
  createData('Santeri', 26, 1, 26, 18)
]

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th aria-label='ID' />
          <th>CM</th>
          <th>Kerroin</th>
          <th>Tulos</th>
          <th>Pisteet</th>
        </tr>
      </thead>
    </table>
  )
}

// {
//   id: 'username',
//   numeric: false,
//   disablePadding: true,
//   label: ''
// },
// {
//   id: 'fishLength',
//   numeric: true,
//   disablePadding: false,
//   label: 'Suurin Ahven(cm)'
// },
// {
//   id: 'fishMultiple',
//   numeric: true,
//   disablePadding: false,
//   label: 'Kalastusväline(kerroin)'
// },
// {
//   id: 'fishResult',
//   numeric: true,
//   disablePadding: false,
//   label: 'Tulos'
// },
// {
//   id: 'points',
//   numeric: true,
//   disablePadding: false,
//   label: 'Pisteet'
// }

export default Table
