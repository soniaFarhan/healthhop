import { TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Patientdash = () => {

    
  return (
    <div className="d-flex justify-content-center align-items-center layout mx-auto"  style={{ background: "white",width:"400px" }}>
        <div className=" my-5 rounded-4 shadows p-3">
       <h3 className="text-center mb-2">Sign-Up </h3>
    

      <div className="mb-5">
        <TextField
          className="my-2"
          id="outlined-basic"
          label=" User Name"
          name="Business Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
            <TextField
          className="my-2"
          id="outlined-basic"
          label=" Email Address"
          name=" Business  email address"
          variant="outlined"
          style={{ width: "100%" }}
        />

        <TextField
          className="my-2"
          id="outlined-basic"
          label=" Password"
          name="your name"
          variant="outlined"
          style={{ width: "100%" }}
        />

    

      </div>

<div className="mt-auto">
         <Link to={"/patient-inquiries"}>
            
            <button className='btn btn_green w-100 py-3'>
                Continue
            </button>
            </Link>

</div>
      </div>
    </div>
  )
}

export default Patientdash
