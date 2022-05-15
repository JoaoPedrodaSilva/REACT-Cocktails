import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, image, info, glass}) => {

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <h3 className='name'>{name}</h3>
      <h4 className='glass'>{glass}</h4>
      <p className='info'>{info}</p>
      <Link to={`cocktail/${id}`} className='button'>
        Details
      </Link>
    </article>
  )
}

export default Cocktail