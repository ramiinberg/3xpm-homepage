import { useState } from 'react'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'
import FishTableHead from './FishTableHead'

function createData(username, fishLength, fishMultiple, fishResult, points) {
  return { username, fishLength, fishMultiple, fishResult, points }
}

const rows = [
  createData('Wurppe', 28, 1, 28, 25),
  createData('Timo', 26, 1, 26, 18),
  createData('Kimmo', 27, 0.75, 20.25, 12),
  createData('Santeri', 26, 1, 26, 18)
]

export default function FishTable() {
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('fishLength')

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby='tableTitle' sx={{ minWidth: 750 }}>
            <h1>test</h1>
            <FishTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
