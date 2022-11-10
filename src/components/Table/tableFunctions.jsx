function getBodyRow(row, rowIndex, colIndex) {
  return [
    row[rowIndex].c[colIndex],
    row[rowIndex].c[colIndex + 1],
    row[rowIndex].c[colIndex + 2],
    row[rowIndex].c[colIndex + 3],
    row[rowIndex].c[colIndex + 4]
  ]
}

function getBodyJSXRow(body, index) {
  return (
    <tr>
      <td>{body[index]?.v}</td>
      <td>{body[index + 1]?.v}</td>
      <td>{body[index + 2]?.v}</td>
      <td>{body[index + 3]?.v}</td>
      <td>{body[index + 4]?.v}</td>
    </tr>
  )
}

export { getBodyRow, getBodyJSXRow }
