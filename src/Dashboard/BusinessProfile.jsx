import { Avatar } from '@mui/material'
import React from 'react'

export const BusinessProfile = () => {
  return (
    <>
    <div className="">

       <div className='bp-img d-flex justify-content-center align-items-center ' style={{position:"relative"}}>
            <h2 className='text-white'>
              Medical Business name
            </h2>
            
        <div className="d-flex"  style={{position:"absolute",bottom:"-79px",left:"34px"}}>
        <div className=" d-md-flex aling-items-center">
          <div>

       <Avatar src=''  sx={{ width: 137, height: 137}} />
          </div>

       <div className="mt-auto">
        <h5>Rep name here</h5>
        <p style={{fontSize:"13px" }}>medicalporvider@gamil.com</p>
       </div>
      <p  className='mt-auto' style={{fontSize:"13px"}}>  +92838489093</p> 
        </div>
      

      <div className="">
        3frfrf
      </div>
        </div>
        </div>

    </div>


    </>
  )
}
