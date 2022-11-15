import { getBodyJSXRow } from './tableFunctions'

const headerJSX = header => (
  <tr>
    <th aria-label='name' />
    <th>{header[0]?.label || 'CM'}</th>
    <th>{header[1]?.label || 'Kerroin'}</th>
    <th>{header[2]?.label || 'Tulos'}</th>
    <th>{header[3]?.label || 'Pisteet'}</th>
  </tr>
)

const bodyJSX = body => (
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

function AhvenTable({ header, body }) {
  return (
    <table className='table'>
      <thead>{headerJSX(header)}</thead>
      <tbody>{bodyJSX(body)}</tbody>
    </table>
  )
}

export default AhvenTable
