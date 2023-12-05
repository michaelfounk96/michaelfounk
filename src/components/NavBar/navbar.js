import React from 'react'
import './navbar.css'
import logo from '../../assets/logo-no-background.png'

import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href=''><img src={logo} alt='logo' className='logo' /> </a>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            Contact
        </button>
    </nav>
  )
}

export default Navbar