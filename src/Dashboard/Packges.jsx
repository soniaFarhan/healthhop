import React from 'react'
import { Link } from 'react-router-dom'
import Popup from '../components/Popup'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';


export const Packges = () => {
  const patients = [
    { label: 'John Doe' },
    { label: 'Jane Smith' },
    { label: 'Michael Johnson' },
    { label: 'Sarah Davis' },
    { label: 'David Brown' },
    { label: 'Jessica Lee' },
    { label: 'Robert Taylor' },
    { label: 'Jennifer Clark' },
    { label: 'William Martinez' },
    { label: 'Mary Wilson' }
];

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
            <div className="row d-sm-flex justify-content-center">
              <div className="col-sm-6  my-2 d-flex justify-content-sm-end">
                <div class="card  c-wid mx-auto mx-sm-0 ms-sm-auto me-sm-1 border-0 shadows4 rounded-3"  style={{minWidth:290,  minHeight: 450 }}>
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

                    {/* <div className='mb-3' > */}
                      {/* <select class="form-select py-3 rounded-4" aria-label="Default select example" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                        <option selected> Send to Patient</option>
                        <option value="1">Patient Name</option>
                        <option value="2">Patient Name</option>
                        <option value="3">Patient Name</option>
                      </select> */}
                    {/* </div> */}

                    <div className='mb-5'>
                    <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={patients}
                              renderInput={(params) => <TextField {...params} label="Send to Patient" />}
                               placement=""
                            />

                    </div>



                  </div>
                </div>
              </div>
              <div className="col-sm-6  my-2 d-flex justify-content-sm-start ">
                <div class="card c-wid mx-auto mx-sm-0  ms-sm-1 border-0 shadows4 rounded-3" style={{ minWidth:290, minHeight: 450 }}>
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
                    {/* <div className='mb-3' >
                      <select class="form-select py-3 rounded-4" aria-label="Default select example" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                        <option selected> Send to Patient</option>
                        <option value="1">Patient Name</option>
                        <option value="2">Patient Name</option>
                      </select>
                    </div> */}

                    <div className='mb-5'>
                      <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={patients}
                              renderInput={(params) => <TextField {...params} label="Send to Patient" />}
                               placement=""
                            />

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
