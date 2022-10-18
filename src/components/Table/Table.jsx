function Table() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th aria-label='name' />
          <th>CM</th>
          <th>Kerroin</th>
          <th>Tulos</th>
          <th>Pisteet</th>
        </tr>
      </thead>
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
