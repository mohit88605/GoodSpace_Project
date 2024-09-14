import React from 'react'
import logo2 from '../images/logo2.png'
import './Home.css'

const Home = () => {
  return (
    <div className=''>
        <hr></hr>
        <div className='first-content'>
            <p><b>The World's Most Configurable</b></p>
            <h1>Travel & Expenses Managemnet Software</h1>
            <div className='para'>
             <p className='para-content'>Configure <span><a>any</a></span> rule. Enable a world class mobile experience for your users. 
                Get seamless reporting & integrations. Inbuilt OCR expense scanning. 
                Manage travel & non-travel expenses. Open APIs to connect with external systems.</p>
            </div>
        </div>
        <div className='input'>
            <input placeholder='Name' className='name'></input>
            <input placeholder='Official email ID'className='id'></input>  
            <button className='nav-btn'>Start Trial</button>
            <div className='trial'>
                <p>30 Days free trial</p>
                <li>Upto 10 users</li>
            </div>
        </div>
        <div className='contain-images'>
            <p className=''>USED BY OVER 50 ENTERPRISES</p>
            <div className='images'>
                <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>
                <img src={logo2} alt=''/>
            </div>

        </div>
      
    </div>
  )
}

export default Home
