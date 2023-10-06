import { Chat } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Inquiries = () => {

  const data = [
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },
    {
      name: "Herry",
      chat: <p>

        Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... <Link className='color' style={{ textDecoration: "none", }} to={"/meet"}>Read more </Link> </p>,
      img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },




  ]


  return (
    <>
      <div className="container my-2  p-3 bg-white" style={{ borderRadius: "12px", paddingBottom: "90px" }}>
        <div className=" row m-1" >
          <div className="col"></div>
          {
            data.map((e) => {
              return (

                <div className="d-md-flex  bg-white shadows4 mb-2 p-1" style={{ borderRadius: "12px" }}>









                  <div className='p-1 me-2'>
                    <div style={{ width: "8rem", height:"100%" }}>
                      <img className='img-fluid w-100 h-100' src={require("../assets/h-card.png")} alt="" />
                    </div>
                  </div>
                  <div className=" ">

                    <div className="d-flex justify-content-between aling-items-center pt-2">
                      <h6 className='' style={{ fontSize: "16px" }}>  {e.name} </h6>

                      <Link style={{ textDecoration: "none" }} to={"/meet"}>

                        <p style={{ fontSize: "10px", color: "#07A6A9" }}>Quote offered</p>
                      </Link>
                    </div>

                    <div className="me-4">
                      <p style={{ fontSize: "11px" }}>
                        {e.chat}
                      </p>

                    </div>
                    <div className="d-flex aling-items-center justify-content-end">

                      <div className="m-2">
                        <Link to={"/message"}>

                          <Button variant="text" style={{ color: '#07A6A9' }} ><Chat /></Button>
                        </Link>
                      </div>

<div className="m-2">
<Link to={"/calendar"}>

                          <Button variant="contained" style={{ backgroundColor: "#07A6A9", padding: "6px", fontSize: "10px" }}>Meet</Button>
                        </Link>

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
  )
}
