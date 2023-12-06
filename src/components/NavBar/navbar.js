import React from 'react'
import './navbar.css'
import logo from '../../assets/logo-no-background.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href='/'><img src={logo} alt='logo' className='logo' /> </a>
        <div className='navMenu'>
            <Link to="/" className='navItem'>Home</Link>
            <Link to="/resume" className='navItem'>Resume</Link>
            <Link to="/contact" className='navItem'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar