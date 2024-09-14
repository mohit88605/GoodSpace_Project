import React from 'react'
import './Feature.css'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'
import logo6 from '../images/logo6.png'
import logo7 from '../images/logo7.png'
import logo8 from '../images/logo8.png'
import logo9 from '../images/logo9.png'
import logo10 from '../images/logo10.png'
import logo11 from '../images/logo11.png'


const Feature = () => {
  return (
    <div className='main-box'>
        <div className='feature'>
            <h2>Features that suit your needs</h2>
        </div>
        <div className='box'>
          <div className='feature-box'>
            <div className='rectangle'></div>
            <div>
              <img src={logo3} alt=''/>
            </div>
            <div>
               <h3>Setup Employee Group</h3>
              <p>Use any parameter to setup distinct
              employee groups to implement policies</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo4} alt=''/>
            </div>
            <div>
              <h3>The Definitive Rule Engine</h3>
              <p>Configure ANY policy - and if you can’t configure it, 
                we promise to work on it for free</p>
            </div>
          </div>
          
          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo5} alt=''/>
            </div>
            <div>
              <h3>Customized Reports</h3>
              <p>Setup the reports that you want using our seamless reporting engine.</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo6} alt=''/>
            </div>
            <div>
              <h3>Superior Employee Experience</h3>
              <p>Manage all expenses and travel requests easily. 
                Empower your employees with personalized reports.</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo7} alt=' '/>
            </div>
            <div>
              <h3>Easy Integrations</h3>
              <p>Integrate with your upstream, 
                HRMS or your downstream finance system to seamlessly deliver value through our Open APIs.</p>
            </div>
          </div>

          <div className='feature-box'>
            <div className='rectangle'></div>
            <div>
              <img src={logo8} alt=''/>
            </div>
            <div>
              <h3>Configurable Workflows</h3>
              <p>Configure approvals or rejections. Escalations and reports. At will. Setup new groups.</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo9} alt=''/>
            </div>
            <div>
              <h3>Scan any Bill</h3>
              <p>The world’s best OCR system backs up this product. All data goes in. 99% success.</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo10} alt=''/>
            </div>
            <div>
              <h3>AI-Based Concierge</h3>
              <p>Ask the concierge to change things during your travel - and it will trigger relevant
              actions 24x7.</p>
            </div>
          </div>

          <div className='feature-box'>
           <div className='rectangle'></div>
            <div>
              <img src={logo11} alt=''/>
            </div>
            <div>
              <h3>AI-Assisted Trip Planning</h3>
              <div></div>
              <p>Just tell us what you want to do in normal language and 
                we will try and put together the best itinerary for you.</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Feature
