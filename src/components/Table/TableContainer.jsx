import { useEffect, useState } from 'react'
import AhvenTable from './AhvenTable'
import KuhaTable from './KuhaTable'
import { getBodyRow } from './tableFunctions'

function Table() {
  const sheetId = '1O7pngMQhWZpfwLNto6PHQuF3fKZ-j6heD4EjEEgAuPI'
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`
  const sheetName = 'Kilpailu'
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`
  const [header, setHeader] = useState({})
  const [body, setBody] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(rep => {
        // Remove additional text and extract only JSON:
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2))
        console.log('header', jsonData.table.cols)
        const ahvenHeader = []
        const kuhaHeader = []
        jsonData.table.cols.forEach(item => {
          // Ahven
          if (
            item.id === 'B' ||
            item.id === 'C' ||
            item.id === 'D' ||
            item.id === 'E'
          ) {
            ahvenHeader.push(item)
          } else if (
            item.id === 'H' ||
            item.id === 'I' ||
            item.id === 'J' ||
            item.id === 'K'
          ) {
            kuhaHeader.push(item)
          }
        })
        const headerArray = {
          ahvenHeader: [...ahvenHeader],
          kuhaHeader: [...kuhaHeader]
        }

        console.log('headerArray', headerArray)
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
  console.log('headerArray', header)
  return (
    Object.keys(header).length && (
      <>
        <AhvenTable header={header.ahvenHeader} body={body} />
        <KuhaTable header={header.kuhaHeader} body={body} />
      </>
    )
  )
}

export default Table
