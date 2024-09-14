import React from 'react'
import logo from '../images/logo.png'
import location from '../images/location.png'
import call from '../images/call.png'
import insta from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer-box'>
            <div className='footer-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='footer-box2'>
                <div className='box2'>
                  <img src={location} alt=''/>
                  <p>Address</p>
                </div>
                <div className='box2'>
                  <img src={call}alt=''/>
                  <p>+91 1234567890</p>
                </div>
                <div className='box2 box22'>
                  <p>Social Media</p>
                  <img src={linkedin} alt=''/>
                  <img src={youtube} alt=''/>
                  <img src={insta} alt=''/>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className='copyright'>
            <div className='navbar-content footer-content'>
                <a href=''>Blogs</a>
                <a href=''>Features</a>
                <a href=''>Pricing</a>
                <a href=''>Integrations</a>
            </div>
            <div className='copyright2 '>
                <p>Copyright © 2024 • ExpenseBook</p>
            </div>     
        </div>
      
    </div>
  )
}

export default Footer
