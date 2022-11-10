import { useEffect, useState } from 'react'

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
        console.log('jsonData', jsonData)
        const headerArray = [
          jsonData.table.cols[1],
          jsonData.table.cols[2],
          jsonData.table.cols[3],
          jsonData.table.cols[4]
        ]
        setHeader(headerArray)
      })
  }, [])
  console.log('header', header)
  const headerJSX = () => (
    <tr>
      <th aria-label='name' />
      <th>{header[0]?.label || 'CM'}</th>
      <th>{header[1]?.label || 'Kerroin'}</th>
      <th>{header[2]?.label || 'Tulos'}</th>
      <th>{header[3]?.label || 'Pisteet'}</th>
    </tr>
  )
  return (
    <table className='table'>
      <thead>{headerJSX()}</thead>
      <tbody>
        <tr>
          <td>Wurppe</td>
          <td>28</td>
          <td>1</td>
          <td>28</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Timo</td>
          <td>26</td>
          <td>1</td>
          <td>26</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Kimmo</td>
          <td>27</td>
          <td>0.75</td>
          <td>20.25</td>
          <td>12</td>
        </tr>
        <tr>
          <td>Santeri</td>
          <td>26</td>
          <td>1</td>
          <td>26</td>
          <td>18</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
