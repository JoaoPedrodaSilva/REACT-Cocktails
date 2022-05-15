import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-section'>
      <h1 className='error-section-title'>Oops...it's a dead end.</h1>
      <Link to='/' className='error-section-button'>
        Back Home
      </Link>
    </section>
  )
}

export default Error