import React from 'react'
import FaceImg1 from '../images/FaceImg1.png'
import FaceImg2 from '../images/FaceImg2.png'
import FaceImg3 from '../images/FaceImg3.png'
import './Customer.css'

const Customer = () => {
  return (
    <div className='customer'>
       <div className='customer-heading'>
          <h2>Our customers love us</h2>
       </div>
       <div className='customer-main-box'>
            <div className='customer-content1'>
                <p>ExpenseBook has truly streamlined our travel setup. No more 
                    emails and delays in booking. No mor unknown overruns in expense. 
                    Everything is trackable, and the configurability they offer is outstanding.
                </p>
                <div className='customer-name'>
                    <img src={FaceImg1} alt=''/>
                    <div className='customer-detail'>
                        <h3>Rohit Mehra</h3>
                        <p>CFO, XYZ </p>
                    </div>
                </div>
            </div>

            <div className='customer-content2'>
                <p>ExpenseBook has truly streamlined our travel setup. No more 
                    emails and delays in booking. No mor unknown overruns in expense. 
                    Everything is trackable, and the configurability they offer is outstanding.
                </p>
                <div className='customer-name'>
                    <img src={FaceImg2} alt=''/>
                    <div className='customer-detail'>
                        <h3>Alan Turing</h3>
                        <p>CFO, XYZ </p>
                    </div>
                </div>
            </div>

            <div className='customer-content3'>
                <p>ExpenseBook has truly streamlined our travel setup. No more 
                    emails and delays in booking. No mor unknown overruns in expense. 
                    Everything is trackable, and the configurability they offer is outstanding.
                </p>
                <div className='customer-name'>
                    <img src={FaceImg3} alt=''/>
                    <div className='customer-detail'>
                        <h3>Mark Jacob</h3>
                        <p>CFO, XYZ </p>
                    </div>
                </div>
            </div>



    
        </div>
    </div>
  )
}

export default Customer
