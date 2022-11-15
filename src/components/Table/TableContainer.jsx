import { useEffect, useState } from 'react'
import AhvenTable from './AhvenTable'
import { getBodyRow } from './tableFunctions'

function Table() {
  const sheetId = '1O7pngMQhWZpfwLNto6PHQuF3fKZ-j6heD4EjEEgAuPI'
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`
  const sheetName = 'Kilpailu'
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`
  const [header, setHeader] = useState([])
  const [body, setBody] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(rep => {
        // Remove additional text and extract only JSON:
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2))
        const headerArray = [
          jsonData.table.cols[1],
          jsonData.table.cols[2],
          jsonData.table.cols[3],
          jsonData.table.cols[4]
        ]
        setHeader(headerArray)
        const bodyArray = [
          ...getBodyRow(jsonData.table.rows, 0, 0),
          ...getBodyRow(jsonData.table.rows, 1, 0),
          ...getBodyRow(jsonData.table.rows, 2, 0),
          ...getBodyRow(jsonData.table.rows, 3, 0),
          ...getBodyRow(jsonData.table.rows, 4, 0),
          ...getBodyRow(jsonData.table.rows, 5, 0),
          ...getBodyRow(jsonData.table.rows, 6, 0),
          ...getBodyRow(jsonData.table.rows, 7, 0),
          ...getBodyRow(jsonData.table.rows, 8, 0),
          ...getBodyRow(jsonData.table.rows, 9, 0),
          ...getBodyRow(jsonData.table.rows, 10, 0),
          ...getBodyRow(jsonData.table.rows, 11, 0),
          ...getBodyRow(jsonData.table.rows, 12, 0)
        ]
        setBody(bodyArray)
      })
  }, [])

  return <AhvenTable header={header} body={body} />
}

export default Table
