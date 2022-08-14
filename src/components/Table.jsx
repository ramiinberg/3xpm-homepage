import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Wurppe', 28, 1, 28, 25),
  createData('Timo', 26, 1, 26, 18),
  createData('Kimmo', 27, 0.75, 20.25, 12),
  createData('Santeri', 26, 1, 26, 18)
]

export default function FishTable() {
  const [dense, setDense] = useState(false)

  const handleChangeDense = event => {
    setDense(event.target.checked)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table aria-labelledby='tableTitle' size={dense ? 'small' : 'medium'}>
            <h1>test</h1>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
