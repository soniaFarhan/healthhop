import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { FaSortAlphaDown, FaCalendar, FaDollarSign } from 'react-icons/fa';

export const Inovice = () => {
  // const data=[
  // {
  //   name:  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>,
  //   orderno:<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>,
  //   chat:<p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
  //   scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>,
  //   amount: <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
  // },


  //]



  return (
    <>
      {/* {
data.map(()=>{

})

} */}


<div className="row mt-md-3">
<div className="col-lg-4 col-sm-6 col-12 mt-md-0 mt-3 mx-lg-0 mx-auto position-relative" >
              <input type="text" class="form-control rounded-pill border-1 border-dark bg-transparent" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{  backgroundColor: "rgb(251,253,251)" }} />
              <button className='position-absolute translate-middle border-0 bg-transparent' style={{top:"50%", right:"0"}}><BiSearch style={{fontSize:"20px"}} /></button>
            </div>
            <div className='col-lg-4 col-sm-6 col-12'></div>
            <div className="col-lg-4 col-sm-6 col-12 text-end">
              <button className='btn'>
                <FaSortAlphaDown /> A-Z
              </button>
              <button className='btn'>
                <FaCalendar /> Date
              </button>
              <button className='btn'>
                <FaDollarSign /> Paid
              </button>
            </div>
</div>
      <div className=" my-3 p-3 container shadows2 " style={{ minHeight: "70vh", borderRadius: "14px", backgroundColor: "#ffff" }}>
        <div className=" m-2 p-2 pe-4" style={{ backgroundColor: "#F5F5F5", borderRadius: "14px" }}>
          <div className="d-sm-flex aling-items-center justify-content-between">

            <div>
              <h6 className='fw-bold'>  Hair Transplant  <span className='text-nowrap' style={{ fontSize: "13px" }}> - John Doe</span> </h6>
            </div>

            <div>
            <h6 className='fw-bold me-sm-2 ps-sm-2'>  Order number:  <span className='fw-normal text-nowrap'> 000092678-5</span> </h6>
            </div>
          </div>
          <div className="fs_14px cu-color"><p>Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
            scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma.</p>
          </div>


          <div className="d-sm-flex aling-items-center justify-content-between">

            <div className='d-flex align-items-end'>
              <h6 className='fw-bold'> Amount:  <span className='fw-normal'> $20,000</span> </h6>
            </div>

            <div className='d-sm-flex aling-items-center justift-content-between'>
              <div className="mt-auto me-2">

                <h6 className='fw-bold'>  Date: <span className='fw-normal'>  9-1-2023</span> </h6>
              </div>
              <div className="m-sm-2">
                <Link to={"/inovice/Invoice-details"}>


                  <Button variant="contained" style={{ backgroundColor: "#07A6A9", padding: "6px 27px", fontSize: "10px" }}>see details</Button>
                </Link>
              </div>
            </div>
          </div>

        </div>





      </div>



    </>
  )
}
