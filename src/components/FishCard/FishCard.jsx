function FishCard(props) {
  const { fishImage, fishName } = props
  return (
    <div className='home'>
      <img src={fishImage} alt='house' className='home__img' />
      <h5 className='home__name'>{fishName}</h5>

      <button type='button' className='btn home__btn'>
        Ahven taulu
      </button>
    </div>
  )
}

export default FishCard
