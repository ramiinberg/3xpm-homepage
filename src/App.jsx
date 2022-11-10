import Sidebar from './components/Sidebar'
import Table from './components/Table'
import Header from './views/Header'
import Showcase from './views/Showcase'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Showcase />
      <Table />
    </div>
  )
}

export default App
