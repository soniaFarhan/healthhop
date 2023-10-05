import { Chat } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const ConfirmedBooking = () => {

  const data = [
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />,
      amount: " $ 1000",
      orderno: "002",
      date: " 002"
    },
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />,
      amount: " $ 1000",
      orderno: "002",
      date: " 002"

    },
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />,
      amount: " $ 1000",
      orderno: "002",
      date: " 002"

    },




  ]


  return (
    <>
      <div className="container my-2  p-3 bg-white" style={{ borderRadius: "12px", height:"80vh" }}>
        <div className=" row m-1" >
          <div className="col p-0">
            {
              data.map((e) => {
                return (






                  <div className="d-md-flex  bg-white shadows4 mb-2 p-1" style={{ borderRadius: "12px" }}>



                    <div className='p-1 me-2'>
                      <div style={{ width: "8rem", height: "100%" }}>
                        <img className='img-fluid w-100 h-100' src={require("../assets/h-card.png")} alt="" />
                      </div>
                    </div>
                    <div className=" ">

                      <div className="d-flex justify-content-between aling-items-center pt-2 ">
                        <h6 style={{ fontSize: "16px" }}>  {e.name} </h6>
                      </div>

                      <div className="me-4">
                        <p className='mb-0' style={{ fontSize: "11px" }}>
                          {e.chat}
                        </p>

                      </div>
                      <div className="d-md-flex aling-items-center justify-content-between">

                        <div className="d-sm-flex justify-content-between ">

                          <p className='my-auto' style={{ fontSize: "12px" }}>  <span className='fw-bold'>  Amount:  </span> {e.amount} </p>
                          <p className='my-auto mx-sm-4' style={{ fontSize: "12px" }}>  <span className='fw-bold'>Order No:</span> {e.orderno}</p>
                          <p className='my-auto ' style={{ fontSize: "12px" }}> <span className='fw-bold'>Scheduled procedure date:</span>  {e.date}</p>



                        </div>
                        <div className="d-flex">

                          <div className="m-2">

                            <Button variant="text" style={{ color: '#07A6A9' }} ><Chat /></Button>
                          </div>

                          <div className="m-2">

                            <Button variant="contained" style={{ backgroundColor: "#07A6A9", padding: "6px 27px", fontSize: "10px" }}>Meet</Button>
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
      </div>


    </>
  )
}

