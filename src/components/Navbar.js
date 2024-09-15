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
                <li>Blogs</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <button className='nav-btn'>Start Trial</button>
        </div>
        <div className='hidden'>
           <img src={navlogo} alt=''></img>
        </div>
        </div>
        <div className='hr'></div>
    </div>
  )
}

export default Navbar
