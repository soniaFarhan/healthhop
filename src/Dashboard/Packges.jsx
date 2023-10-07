import React from 'react'
import { Link } from 'react-router-dom'
import Popup from '../components/Popup'

export const Packges = () => {
  return (
    <>

      <div className="container">
        <div className="mx-lg-5">
          <div className="mx-lg-5">



            <div className="d-flex justify-content-between aling-items-center my-3 ">
              <div className="">
                <h1>Packages</h1>

              </div>
              <div className="my-auto">
                <div className='my-auto'>



                  <Popup />

                </div>
              </div>


            </div>
            <div className=" d-md-flex justify-content-center">
              <div className="col-md-6  my-2 d-flex justify-content-md-end">
                <div class="card mx-auto mx-md-0 ms-md-auto me-md-1 border-0 shadows4 rounded-3" style={{ maxWidth: 355, minWidth:290, minHeight: 450 }}>
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div className="text-center p-3 rounded-4" style={{ backgroundColor: "#07A6A9", color: "white"}}>
                      <p>HAIR TRANSPLANT</p>
                      <h1>$10,000</h1>
                    </div>
                    <div className="" >
                      <p className='cu-color fs_14px'>
                        Hair transplant procedure <br />

                        Hotel accommodation for 3 nights <br />
                        Transfer to and from airport/hotel/ <br />
                        clinic <br />

                        After care</p>

                    </div>
                    <div className='mb-3' >
                      <select class="form-select py-3 rounded-4" aria-label="Default select example" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                        <option selected> send to patient</option>
                        <option value="1">patient name</option>
                        <option value="2">patient name</option>
                      </select>
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-md-6  my-2 d-flex justify-content-md-start ">
                <div class="card mx-auto mx-md-0  ms-md-1 border-0 shadows4 rounded-3" style={{ maxWidth: 355, minWidth:290, minHeight: 450 }}>
                  <div class="card-body d-flex flex-column justify-content-between">
                    <div className="text-center p-3 rounded-4" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                      <p>LASIK SURGERY</p>
                      <h1>$10,000</h1>
                    </div>
                    <div className="" >
                      <p className='cu-color fs_14px'>
                        Hair transplant procedure <br />

                        Hotel accommodation for 3 nights <br />
                        Transfer to and from airport/hotel/ <br />
                        clinic <br />

                        After care</p>

                    </div>
                    <div className='mb-3' >
                      <select class="form-select py-3 rounded-4" aria-label="Default select example" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                        <option selected> send to patient</option>
                        <option value="1">patient name</option>
                        <option value="2">patient name</option>
                      </select>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}
