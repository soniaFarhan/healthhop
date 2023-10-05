import { Chat, MedicalServicesOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import {IoCallOutline} from "react-icons/io5"
import {TbMailOpenedFilled} from "react-icons/tb"

const Meet = () => {

  const data = [

    {
      name: <p className="m-0 fw-bold">
        Anadulo Medical center 
        <span className="m-0" style={{ fontSize: "12px" }}>
          (Hair Transplant)
        </span>
      </p>,
      chat: "         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma.",
      img:
        <img src={require("../assets/blog-card-5.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />,
      price: "($2000 USA-$3,500)"

    },
    {
      name: <p className="m-0 fw-bold">
        Anadulo Medical center 
        <span className="m-0" style={{ fontSize: "12px" }}>
          (Hair Transplant)
        </span>
      </p>,
      chat: "         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma.",
      img:
        <img src={require("../assets/blog-card-5.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />,
      price: "($2000 USA-$3,500)"

    },




  ]
  return (
    <>
      <div className="bp-img d-flex justify-content-center align-items-center ">

      </div>
      <div className="mt-2" style={{}}>
        <div className=" d-xl-flex  justify-content-between">
          <div className="d-xl-flex ">
            <div
              style={{
                position: "relative",
                bottom: "70px",
                left: "50px",
                width: "148px",
              }}
            >
              <img className='w-100 h-100 rounded-circle' src={require("../assets/h-card.png")}  style={{ width: 137, height: 137 }} />
            </div>

            <div className=" ms-5 d-flex flex-md-row flex-column justify-content-md-between justify-content-center align-items-md-between  gap-3">
              <h4 className="ms-sm-2">Patient name</h4>

              <p style={{ fontSize: "13px", marginTop: "7px" }} className="ms-md-5 ms-sm-4">
                {" "}
                <IoCallOutline style={{color: "#07A6A9", marginRight:"5px", fontSize:"20px"}}/>+92838489093
              </p>
              <p className="ms-sm-4" style={{ fontSize: "13px", marginTop: "7px" }}><TbMailOpenedFilled style={{color: "#07A6A9", marginRight:"5px", fontSize:"20px"}}/>medicalporvider@gamil.com</p>


            </div>

          </div>




        </div>

        <div className="d-flex flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-center">
          <div className="mt-auto ms-4">

            <h4 className="m-0">History:</h4>
          </div>
          <div className="d-flex align-items-center" >
            <div className='' >
              <select class="form-select" aria-label="Default select example" style={{ backgroundColor: "#07A6A9", color: "white" }}>
                <option selected> Send Package</option>
              </select>
            </div>
            <div className="">


              <Button variant="text" style={{ color: '#07A6A9' }} ><Chat /></Button>

            </div>
          </div>


        </div>


        <div className="container my-0  pt-2 " style={{ borderRadius: "12px", paddingBottom: "90px" }}>

          {
            data.map((e,index) => {
              return (

                <div className="">


                  <div className=" row bg-white shadows4 m-2 p-2 " style={{ borderRadius: "12px" }}>






                    <div className="col-md-2 col-sm-4 col-6 px-0">


                    <div id={`carouselExampleControls-${index}`} class="carousel slide " data-bs-ride="carousel">
                                                <div class="carousel-inner h-100 w-100">
                                                    <div class="carousel-item active w-100 h-100" >
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div>
                                                                <img className='w-100 h-100' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item w-100 h-100">
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div >
                                                                <img className='w-100 h-100' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item w-100 h-100">
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div >
                                                                <img className=' w-100 h-100' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <button style={{left:"7px"}} class="carousel-control-prev text-dark" type="button" data-bs-target={`#carouselExampleControls-${index}`} data-bs-slide="prev">
                                                    <div className='d-flex align-items-center justify-content-center bg-dark rounded-5'><span class="carousel-control-prev-icon" aria-hidden="true"></span></div>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button style={{right:"7px"}} class="carousel-control-next text-dark" type="button" data-bs-target={`#carouselExampleControls-${index}`} data-bs-slide="next">
                                                    <div className='d-flex align-items-center justify-content-center bg-dark rounded-5'><span class="carousel-control-next-icon" aria-hidden="true"></span></div>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>



                    </div>
                    <div className="col-xl-7 col-md-12 ">

                      <div className="d-flex justify-content-between aling-items-center">
                        <h6>  {e.name} </h6>



                      </div>

                      <div className="">
                        <p className="mb-0 cu-color" style={{ fontSize: "14px" }}>
                          {e.chat}
                        </p>

                      </div>
                      <div className=" ">

                        <div className="m-0">


                          <p className="mb-0 fw-bold">price</p>

                        </div>

                        <div className="fw-light cu-color" style={{ fontSize: "10px" }}>

                          <p>{e.price}</p>


                        </div>

                      </div>

                    </div>


                  </div>
                </div>

              )
            })
          }



        </div>
      </div>


    </>
  );
};

export default Meet;
