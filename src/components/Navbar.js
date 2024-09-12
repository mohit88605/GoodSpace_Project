import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div>
            <img src={logo} alt='logo'/>
            </div>
        <div className='navbar-content'>
                <a href='#'>Blogs</a>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Integrations</a>
                <a href='#'><button className='nav-btn'>Start Trial</button></a>
        </div>
        </div>
        <div className='hr'></div>
    </>
  )
}

export default Navbar
