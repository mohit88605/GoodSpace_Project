import React from 'react'
import './Integration.css'
import vector from '../images/Vector.png'
import IntLogo1 from "../images/IntLogo1.png"
import IntLogo2 from "../images/IntLogo2.png"
import IntLogo3 from "../images/IntLogo3.png"

const Integration = () => {
  return (
   <div className='integration'>
      <div>
         <h2>Integration</h2>
      </div>
      <div>
         <img src={vector}/>
      </div>
       
      <div className='int-box'>
         <div className='int-inner-box'>
            <div className='heading'>
              <div>
                <img src={IntLogo1} alt=''/>
              </div>
              <div>
                <h4>HRMS System</h4>
              </div>
            </div>
            <div>
              <p>We can integrate with any HRMS as long as the employee 
                master can be made available to us over SFTP/API.</p>

              <p>We are already deeply integrated with PeopleStrong and others are coming up.</p>
            </div>
          </div>

         <div className='int-inner-box2'>
            <div className='heading'>
              <div>
                <img src={IntLogo2} alt=''/>
              </div>
              <div>
                <h4>Finance System</h4>
              </div>
            </div>
            <div>
              <p>Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.</p>
              <p>Open APIs available to connect.</p>
            </div>
          </div>

         <div className='int-inner-box3'>
            <div className='heading'>
              <div>
                <img src={IntLogo3} alt=''/>
              </div>
              <div>
                <h4>Single Sign-on System</h4>
              </div>
            </div>
            <div>
              <p>We can integrate to ensure that your users don’t have to log in multiple times into different logins.</p>
              <p>SSO is possible with any system that offers it.</p>
            </div>
          </div>
          
      </div>
    </div>
     
  )
}

export default Integration
