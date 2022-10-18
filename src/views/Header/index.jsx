import './header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>3xPM</span>
          <span className='heading-primary--sub'>
            Let the sea set you free.
          </span>
        </h1>
      </div>
    </header>
  )
}

export default Header
