import { useEffect, useState } from 'react'
import { getBodyRow, getBodyJSXRow } from './tableFunctions'

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
  const headerJSX = () => (
    <tr>
      <th aria-label='name' />
      <th>{header[0]?.label || 'CM'}</th>
      <th>{header[1]?.label || 'Kerroin'}</th>
      <th>{header[2]?.label || 'Tulos'}</th>
      <th>{header[3]?.label || 'Pisteet'}</th>
    </tr>
  )

  const bodyJSX = () => (
    <>
      {getBodyJSXRow(body, 0)}
      {getBodyJSXRow(body, 5)}
      {getBodyJSXRow(body, 10)}
      {getBodyJSXRow(body, 15)}
      {getBodyJSXRow(body, 20)}
      {getBodyJSXRow(body, 25)}
      {getBodyJSXRow(body, 30)}
      {getBodyJSXRow(body, 35)}
      {getBodyJSXRow(body, 40)}
      {getBodyJSXRow(body, 45)}
      {getBodyJSXRow(body, 50)}
      {getBodyJSXRow(body, 55)}
      {getBodyJSXRow(body, 60)}
    </>
  )

  return (
    <table className='table'>
      <thead>{headerJSX()}</thead>
      <tbody>{bodyJSX()}</tbody>
    </table>
  )
}

export default Table
