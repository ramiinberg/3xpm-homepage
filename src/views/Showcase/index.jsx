import perch from '../../images/fish.jpg'
import FishCard from '../../components/FishCard'
import './showcase.scss'

function Showcase() {
  return (
    <div className='showcase'>
      <FishCard fishImage={perch} fishName='Ahven' />
      <FishCard fishImage={perch} fishName='Ahven' />
      <FishCard fishImage={perch} fishName='Ahven' />
    </div>
  )
}

export default Showcase
