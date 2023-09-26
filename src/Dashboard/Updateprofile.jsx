import React from 'react'

const Updateprofile = () => {
  return (
    <>
      <div>

        <div className="container px-4 fs_14px mt-4">
          <h6 className=' fw-bold  ps-2 mt-4'>Summary Of Your Medical Practice:</h6>
          <div className='rounded-4  border border-1 border-dark py-2 px-3'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reprehenderit deleniti adipisci expedita sint sapiente velit in neque molestiae cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quas esse odio. Ut distinctio obcaecati molestiae, maiores quos eius neque.</p>
          </div>
          <h6 className=' fw-bold  ps-2 mt-4'>Breif Description:</h6>
          <div className='rounded-4  border border-1 border-dark py-2 px-3'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reprehenderit deleniti adipisci expedita sint sapiente velit in neque molestiae cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quas esse odio. Ut distinctio obcaecati molestiae, maiores quos eius neque.</p>
          </div>
          <div className="row mt-2 me-md-5">
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Address</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Add'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Your Buissnes Offer The Following:</label>
              <select className='form-control rounded-4 mt-1 border border-1 border-dark form-select fs_14px p-3'  name="" id="">
                <option value="">4&5 Star Hotel Accomodation</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Language</label>
              <select className='form-control rounded-4 mt-1 border border-1 border-dark form-select fs_14px p-3'  name="" id="">
                <option value="" selected>English</option>
              </select>
            </div>
          </div>
          <div className="row mt-4 me-md-5 bg-white py-4 px-3 rounded rounded-4">
            <p className='fw-bold mb-0'>Pictures & Videos</p>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6  p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2  col-sm-4 col-6   p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6    p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2 col-sm-4 col-6    p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2  col-sm-4 col-6   p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2  col-sm-4 col-6   p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
                <div className="col-md-2  col-sm-4 col-6   p-2">
                  <img src="logo192.png" className='w-100 border border-1 rounded-2' alt="" />
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Updateprofile
