import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt="cocktail DB logo" className='logo' />
      </Link>
      <ul className='nav-links'>
        <li className='nav-link'>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/about' className='link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar