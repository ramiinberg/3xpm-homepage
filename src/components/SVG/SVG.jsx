// import svg from '../../img/sprite.svg'

function SVG({ svgClass, iconName }) {
  return (
    <svg className={svgClass}>
      <use xlinkHref={`svg#${iconName}`} />
    </svg>
  )
}

export default SVG
