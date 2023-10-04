
import React from 'react'
import { PiPaperPlaneRightBold } from 'react-icons/pi'
import { AiFillMinusCircle } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import PopupCalender from '../components/PopupCalender'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const Message = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    
  }));
  const data = [
    {
      // avater: <img className='rounded-circle' style={{objectFit:"cover", width: 55, height: 55}} src={require("../assets/card-2.jpg")} alt=""  />,
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/card-2.jpg")} />
    </StyledBadge>,
      name: "Farnky Schmid",
      inquire: <span style={{color:"rgb(249,9,9)"}}>New Inquiry</span>,
      chat: "Me: what does This Dimmy",
      date: <AiFillMinusCircle style={{fontSize:"20px", color:"rgb(249,9,9)"}}/>

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/card-1.jpg")} />
    </StyledBadge>,
      name: "SAHSA COHEN",
      inquire: <span style={{color:"rgb(243,174,36)"}}>Responded</span>,
      chat: "Typing...",
      date: "30.2.2021"

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/card-3.jpg")} />
    </StyledBadge>,
      name: "ROBERT LANDSBERG",
      inquire:<span style={{color:"rgb(0,114,180)"}}>Quote Offered</span>,
      chat: "See you soon!",
      date: "30.2.2021"

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/Ellipse 1.png")} />
    </StyledBadge>,
      name: "CRISTINA ROHMER",
      inquire: <span style={{color:"rgb(101,129,68)"}}>Accepted and Confirmed</span>,
      chat: "That ws wonderful. Thanks...",
      date: "30.2.2021"

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/md-1.jpg")} />
    </StyledBadge>,
      name: "LUKAS SCHULTZ",
      // inquire: "New Inquiry",
      chat: "Alles klar!",
      date: "30.2.2021"

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/md-5.jpg")} />
    </StyledBadge>,
      name: "BOBBY BEUGER",
      // inquire: "New Inquiry",
      chat: "Was machst du?",
      date: "30.2.2021"

    },
    {
      avater:  <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      <Avatar style={{width: 55, height: 55}} alt="Remy Sharp" src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")} />
    </StyledBadge>,
      name: "BOBBY BEUGER",
      // inquire: "New Inquiry",
      chat: "Was machst du?",
      date: "30.2.2021"

    },
    
    
  ]
  return (
    <>

      <div className="container shadows " style={{ borderRadius: "10px", height: "85vh", backgroundColor:"white" }}>
        <h4 className='p-3'>MESSAGE THREADS</h4>

        <div className="row ">
          <div className="col-md-4 ">

            <div className="mb-4 mx-2" >
              <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ borderRadius: "20px", backgroundColor: "transparent" }} />

            </div>
            <div className="scroll-container2">
              <div className="content2">

                {
                  data.map((e) => {
                    return (



                      <div className="d-flex aling-items-center justify-content-between   shadows m-2" style={{ borderRadius: "10px" }}>
                        <div className="d-flex py-2 ">
                          <div className='mx-2 my-auto position-relative'>
                            {e.avater}
                            <span className='position-absolute' style={{top:"10px", left:"10px"}}>{e.dot}</span>

                          </div>

                          <div className="my-auto">
                            <p className='m-0 fw-bold ' style={{ fontSize: "11px" }}>{e.name}</p>
                            <p className='m-0 ' style={{ fontSize: "11px" }}> {e.chat} </p>
                          </div>
                        </div>

                        <div>
                          <p className='m-0  pt-2 text-nowrap pe-1 fw-semibold' style={{ fontSize: "9px" }}>{e.inquire}</p>
                          <p className='m-0 fw-light my-auto p-2 float-end' style={{ fontSize: "9px", maxWidth:"max-content" }}>{e.date}</p>

                        </div>

                      </div>



                    )
                  })
                }
              </div>
            </div>






          </div>
          <div className="col-md-8  " >

            <div className="shadows mx-2 py-5 px-3" style={{ height: "73vh", borderRadius: "12px", backgroundColor:"white" }}>
              <div className="scroll-container1">
                <div className="content1">
                  <div className="d-flex justify-content-end ">
                    <div className="">

                      <div className="word" >
                        <div className='ms-auto'>
                          <p className='mt-2 p-2 fw-light ms-auto' style={{ backgroundColor: "rgb(251,253,251)", borderRadius: "10px", color: "#999A99", fontSize: "12px", maxWidth:"fit-content" }}>Hello Franky!</p>
                        </div>

                      </div>
                      <div className="word" >
                        <div className='ms-auto'>
                          <p className='mt-2 p-2 fw-light word' style={{ backgroundColor: "rgb(251,253,251)", borderRadius: "10px", color: "#999A99", fontSize: "12px", maxWidth:"fit-content"  }}>What are you doing today?</p>
                        </div>
                      </div>
                      <div className="word" >
                        <div className='ms-auto'>
                          <p className=' fw-light word float-end' style={{ backgroundColor: "white", borderRadius: "10px", color: "green", fontSize: "12px", maxWidth:"fit-content"  }}>09:45</p>
                        </div>
                      </div>
                    </div>
                    <div className='mx-2 '>

                    <img className='rounded-circle' style={{objectFit:"cover", width: 40, height: 40}} src={require("../assets/md-5.jpg")} alt=""  />
                    </div>


                  </div>
                  <div className="d-flex justify-content- ">
                      <div className='mx-2 '>

                      <img className='rounded-circle' style={{objectFit:"cover", width: 40, height: 40}} src={require("../assets/card-2.jpg")} alt=""  />
                      </div>

                      <div className="word" >
                        <p className='mt-2 p-2 fw-light' style={{ backgroundColor: "#FFFFF", borderRadius: "10px", color: "#999A99", fontSize: "12px", maxWidth: "fit-content", border: "1px solid rgb(90,156,77)" }}>Hi George! nice to hear you again!</p>
                      </div>
                  </div>
                  <div className="word" >
                        <div className='ms-auto'>
                          <p className=' fw-light word ' style={{ backgroundColor: "white", borderRadius: "10px", color: "green", fontSize: "12px", maxWidth:"fit-content"  }}>09:47</p>
                        </div>
                      </div>
                  <div className="d-flex justify-content-end ">
                    <div className="word" style={{ maxWidth: "40%" }} >

                      <div className='ms-auto'>
                        <p className='mt-2 p-2 fw-light' style={{ backgroundColor: "rgb(251,253,251)", borderRadius: "10px", color: "#999A99", fontSize: "12px", maxWidth: "fit-content" }}>
                          <span className='fw-bold fs-6 text-dark'>Hair Transplant</span><br />
                          <span>Hair transplant surgery is a procedure used to treat hair loss. various techniques are available, but all hair transplant invovlve taking hair-bearingskin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma.</span>
                          <br /><span className='fw-bold fs-6 text-dark'>Amount: $20,000</span>
                        </p>
                      </div>

                    </div>
                    <div className='mx-2 '>

                    <img className='rounded-circle' style={{objectFit:"cover", width: 40, height: 40}} src={require("../assets/md-5.jpg")} alt=""  />
                    </div>


                  </div>

                </div>
              </div>
              <div className="mt-2  position-relative text_dark">

                <input type="text" class="form-control text_dark" placeholder="Enter your message here" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ borderRadius: "20px", backgroundColor: "transparent", fontSize: "12px", padding: "16px" }} ewwe />
                <div className='position-absolute translate-middle'  style={{maxWidth:"fit-content",  right:"-30px", top:"50%"}}>
                <div className='d-flex ' >
                  <div className='rounded-circle bg-success justify-content-center d-flex align-items-center' style={{height:"40px", width:"40px"}}>
                    <button className='btn  text-white fs-4 m-auto p-0'><PiPaperPlaneRightBold /></button>
                  </div>
                  <div className='rounded-circle bg-secondary    text-center ms-2' style={{height:"40px", width:"40px"}}>
                  <PopupCalender/>
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
