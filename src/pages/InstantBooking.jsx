import React from 'react'
import { Link } from 'react-router-dom'

const InstantBooking = () => {
  return (
    <div>
        <div className='container-lg py-5'>
        <h3 className='text-center fw-bold'>
            Book Your Procedure Instantly
        </h3>
        <div className='d-flex justify-content-center'>
            <p className='text-center fs_14px fw-medium' style={{width:'70ch'}}>
            You can book instantly on certain procedures. On average our patients save 10%-20% when they instantly book. Deposits are fully refundable if the medical practitioner later confirms they cannot do your procedure or if you change your mind up until 1 week before your procedure date, so you can book with peace of mind!
            </p>
        </div>

        <div className=' d-flex justify-content-center gap-3 flex-column flex-sm-row mt-2'>
        <div class="card col-md-3 col-sm-6 p-3 border-0 shadow" style={{ minHeight: '400px' }}>
            <div className='text-white p-3 rounded' style={{backgroundColor:"#07A6A9"}}>
                <p className='text-center'>
                    Procedure Only
                </p>
                <h1 className='text-center'>
                    $10,000
                </h1>
            </div>
            <div class="card-body ">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text cu-color">
                Hair transplant procedure Hotel accommodation for 3 nights
                Transfer to and from airport/hotel/clinic
                    After care
                    </p>
            </div>
            <div class="card-body ">
                <Link to={'/payment-method'}>
               <button className='py-3 btn btn_green w-100'>
                Book Instantly
               </button>
                </Link>
            </div>
            </div>

        <div class="card col-md-3 col-sm-6 p-3 border-0 shadow" style={{ minHeight: '400px' }}>
            <div className='text-white p-3 rounded' style={{backgroundColor:"#07A6A9"}}>
                <p className='text-center'>
                    Custom Package
                </p>
                <h1 className='text-center'>
                    $15,000
                </h1>
            </div>
            <div class="card-body ">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text cu-color">
                Hair transplant procedure Hotel accommodation for 3 nights
                Transfer to and from airport/hotel/clinic
                    After care
                    </p>
            </div>
            <div class="card-body ">
               <button className='py-3 btn btn_green w-100'>
                Book Instantly
               </button>
            </div>
            </div>
        </div>

 
        </div>
    </div>
  )
}

export default InstantBooking