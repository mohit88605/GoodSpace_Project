import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className='details-main'>
       <div>
         <h1>Manage your travel and expenses the smart way!</h1>
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
    </div>
  )
}

export default Details
