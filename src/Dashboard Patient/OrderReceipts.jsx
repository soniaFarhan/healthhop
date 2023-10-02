import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const OrderReceipts = () => {
  return (
    <>
<div className="mt-4" style={{width:"18rem"}}>
<input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{borderRadius:"20px",backgroundColor:"transparent",border:"1px solid black"}}/>

</div>
<div className=" my-5 p-3 container shadows2 " style={{height:"60%",borderRadius:"14px", backgroundColor:"#ffff"}}>
  <div className=" m-2 p-3"  style={{backgroundColor:"#F5F5F5",borderRadius:"14px"}}>
  <div className="d-flex aling-items-center justify-content-between">

<div>
  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>
</div>

<div>
<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>
</div>
</div>
<div className="fw-light"><p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>
</div>


<div className="d-flex aling-items-center justify-content-between">

<div>
  <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
</div>

<div className='d-flex aling-items-center justift-content-between'>
  <div className="mt-auto">

<h5 className='fw-bold'>  Date: <span  style={{fontSize:"13px"}}>  9-1-2023</span> </h5>
  </div>
<div className="m-2">
<Link to={"/Invoice-details"}>


<Button variant="contained" style={{backgroundColor:"#07A6A9",padding:"6px 27px",fontSize:"10px"}}>see details</Button>
</Link>
</div>
</div>
</div>

  </div>





</div>



    </>
  )
}
