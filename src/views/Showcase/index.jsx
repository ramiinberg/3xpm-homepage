import smallFish from '../../images/small-fish.jpg'
import FishCard from '../../components/FishCard'
import './showcase.scss'

function Showcase() {
  return (
    <div className='showcase'>
      <FishCard fishImage={smallFish} fishName='Ahven' />
      <FishCard fishImage={smallFish} fishName='Ahven' />
      <FishCard fishImage={smallFish} fishName='Ahven' />
    </div>
  )
}

export default Showcase
