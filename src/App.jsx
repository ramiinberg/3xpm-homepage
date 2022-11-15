import Sidebar from './components/Sidebar'
import TableContainer from './components/Table'
import Header from './views/Header'
import Showcase from './views/Showcase'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Showcase />
      <TableContainer />
    </div>
  )
}

export default App
