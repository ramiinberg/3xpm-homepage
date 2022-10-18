import { useState } from 'react'
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

  return <div />
}
