import { Avatar } from '@mui/material'
import React from 'react'

const Invoicedetails = () => {
  return (
    <>
      <div className="container">
   <div className="d-flex aling-items-center ">
    <Avatar sx={{width:"60px",height:"60px"}}/>
    <h5 className='ms-md-3 my-auto'>  Sunny Apartment</h5>
   </div>
        <div className="">
            <div className="d-flex">

         <div className="text-end">
            <div className="d-flex">
            <div className="" style={{width:"50%",height:"35px"}}>
          <p > Medical provider:  </p> 

            </div>
               <p>

            10.000 USD 
            </p>
           
          
           
            
            </div>
            <div className=" d-flex">

            <p> Total Price: </p> 
            <p>

            30,000 USDS
            </p>

            </div>
            <div className=" d-flex">

            <p> Deposit (30%):  </p>  
             <p>

            17,000 USD
            </p>

            </div>
            <div className=" d-flex">

            <p> 
            Remaining Balance Due on

            
          Day of Procedure to Clinic: </p>  


            </div>
            <div className=" d-flex">

            <p> 

procedure   Name

       </p> 
        <p>

            17,000 USD
            </p>


            </div>
        
         
           
          
             </div>

            </div>
            <div className="col-9">
          <div className="">
          
       
            </div> 

            </div>
        </div>
      </div>
    </>
  )
}

export default Invoicedetails
