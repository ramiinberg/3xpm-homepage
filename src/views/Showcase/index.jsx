import { useEffect } from 'react'
import smallFish from '../../images/small-fish.jpg'
import FishCard from '../../components/FishCard'
import './showcase.scss'

function Showcase() {
  const sheetId = '1O7pngMQhWZpfwLNto6PHQuF3fKZ-j6heD4EjEEgAuPI'
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`
  const sheetName = 'Kilpailu'
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`
  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(rep => {
        // Remove additional text and extract only JSON:
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2))
        console.log('jsonData', jsonData)
      })
  }, [])
  return (
    <div className='showcase'>
      <FishCard fishImage={smallFish} fishName='Ahven' />
      <FishCard fishImage={smallFish} fishName='Ahven' />
      <FishCard fishImage={smallFish} fishName='Ahven' />
    </div>
  )
}

export default Showcase
