import React from 'react'
import logo from '../images/logo.png'
import navlogo from '../images/nav-logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main'>
        <div className='navbar'>
            <div>
            <img src={logo} alt='logo'/>
            </div>
        <div className='navbar-content'>
                <a href='#'>Blogs</a>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>Integrations</a>
                <button className='nav-btn'>Start Trial</button>
        </div>
        <div className='hidden'>
           <img src={navlogo}></img>
        </div>
        </div>
        <div className='hr'></div>
    </div>
  )
}

export default Navbar
