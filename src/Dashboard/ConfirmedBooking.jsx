import { Chat } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export const ConfirmedBooking = () => {
  const [modalShow, setModalShow] = useState(false);

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
                            <Button onClick={()=>setModalShow(true)} variant="text" style={{ color: '#07A6A9' }} >Details</Button>
                          </div>


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


      {modalShow &&      <MohModal
                       
                       show={modalShow}
                      
                      
                       onHide={() => setModalShow(false)}
                       />}
    </>
  )
}


function MohModal({onHide, show}) {


console.log("first")



const handleSubmit=async(e)=>{

e.preventDefault()

onHide();


  
}

const [users, setUsers] = useState([]);
const [page, setPage] = useState(1);
const [userReponse,setUserResponse]=useState()

// const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?page=${page}`))

// // const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?limit=100`))




async function fetchData(){
//   const result= await request()

//   if(!result.ok) return 
//   if(result.data.results.length>0)
//   console.log(result.data.results,"visit data");
//   setUsers(result.data.results)
//   setUsers([...users,...result.data.results])
// setUserResponse(result.data)
}


  return (
    <form>
    <Modal
     show={show}
     onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{zIndex:'10000'}}
    >
      <Modal.Header className="" closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
        <Modal.Title id="contained-modal-title-vcenter">
         Booking
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
      <Modal.Body>
     
      <div className="row mt-3">
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Medical Provider:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>Anadolo Medical Center</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Total Price:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>10,000 USD</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Deposit (30%):</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>30,000 USD</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Remaining Balance Due On Day of procedure to Clinic:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>17,000 USD</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Procedure Name:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>Hair Transplant</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Details:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className=' fs_14px px-4'>Hair Transplant surgery is a procedure used to treat hair loss. Various Techniques are available. But all hair transplant involve taking hair-bearing Skin from one part to the scalp and grafting these pieces of skin onto baid or thining areas of scalp or areas of troma.</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Order Date:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>September 16, 2022</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Order Number:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>000000897557-2</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Scheduled Procedure Date:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>September 16 2022 at 12:45pm</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Reciept:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>google.com.sdicinidnccm</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Address:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>First floor Akbar plaza sialkot</p></div>
         </div>
         <div className='col-sm-2 text-sm-end'>
           <p className='fs_14px fw-bold'>Location:</p>
         </div>
         <div className='col-10 d-flex flex-column '>
           <div className='my-auto'><p className='rounded rounded-pill w-fit px-2 fs_14px'>Turkey</p></div>
         </div>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Order Complete </button>
        <button type="submit" class="btn btn_green text-white">Pay Remaining Amount </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}

