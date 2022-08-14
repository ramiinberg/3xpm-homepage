import {
  Box,
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@mui/material'

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    visuallyHidden
  } = props
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }
  const headCells = [
    {
      id: 'username',
      numeric: false,
      disablePadding: true,
      label: ''
    },
    {
      id: 'fishLength',
      numeric: true,
      disablePadding: false,
      label: 'Suurin Ahven(cm)'
    },
    {
      id: 'fishMultiple',
      numeric: true,
      disablePadding: false,
      label: 'Kalastusväline(kerroin)'
    },
    {
      id: 'fishResult',
      numeric: true,
      disablePadding: false,
      label: 'Tulos'
    },
    {
      id: 'points',
      numeric: true,
      disablePadding: false,
      label: 'Pisteet'
    }
  ]

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead