import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction";
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
// import useApi from '../../hooks/useApi';
// import apiClient from '../../api/apiClient';
import { toast } from 'react-toastify';


const Calender = ({month,patient}) => {
  
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState();
    const [events, setEvents] = useState();

    const handleSelect = (info) => {
        setData(info)
        setModalShow(true)
      };



    const customTitleFormat = {
        month: 'long', // Display full month name
      };
     

// const fetchData=async( )=>{
//   const result=await apiClient.get("/appointments/?page_size=500")
//   if(!result.ok) return
// setEvents(result.data.results)
// }

// useEffect(() => {
//   fetchData()
// }, [])




  return (
    <div className='p-5 mt-3'>
      <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
      initialView='dayGridMonth'
      height={700}
      editable
        selectable
        events={events}
        select={handleSelect}
        eventContent={renderEventContent}
      headerToolbar={{
        right: '', // Add any other left buttons you want
        center: 'prev title next',
        left: month ? 'dayGridMonth,timeGridWeek,timeGridDay' : 'timeGridWeek,timeGridDay'// Add week and day view buttons
      }}
      views={{
        week: {
          type: 'timeGridWeek',
          duration: { weeks: 1 },
        },
        day: {
          type: 'timeGridDay',
          duration: { days: 1 },
        },
      }}
      
      // titleFormat={customTitleFormat} // Apply custom title format
      eventTimeFormat={{
        hour: '2-digit',
        minute: '2-digit',
        meridiem: 'short', // Use 'short' for 'AM' and 'PM' display
      }}
    />
   {patient? modalShow&& <MohModal1
  //  fetchData = {fetchData}
    show={modalShow}
    data={data}
    events={events}
    setEvents={setEvents}
    onHide={() => setModalShow(false)}
    />:modalShow&& <MohModal
    //  fetchData = {fetchData}
      show={modalShow}
      data={data}
      events={events}
      setEvents={setEvents}
      onHide={() => setModalShow(false)}
      />}
    </div>
  )
}

export default Calender

function renderEventContent(eventInfo) {
  console.log(eventInfo,"lll");
  return (
    <>
      <b style={{backgroundColor:"#99C5C6"}}>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <p>{eventInfo.event.extendedProps.reason}</p>
    </>
  );
}

  function MohModal({onHide, show,data:dataa,events,setEvents,}) {
    console.log(dataa.startStr,"kl");
    const{end,start}=dataa
    let initialState={
      startDate:start,
      endDate:end,
      patientName:"",
    }
    let initial={
      date:dataa.startStr,
      visit:"",
      reason:"",
      description:""
    }
    const[event,setEvent]=useState(initialState)
    const[appointment,setAppointment]=useState(initial)
    const handleChange=(key,value)=>{
      setAppointment({...appointment,[key]:value})
    }
console.log(event.title);

const handleSubmit=async(e)=>{

  e.preventDefault()
// //   console.log(appointment,"appointment");
// // // const result =await apiClient.post("/appointments/",appointment)
// // if(!result.ok) toast.error("Error")
// // toast.success("Successfully Submit")
onHide();


// fetchDataAll();
  // setEvents([
  //       ...events,
  //       {
  //         start,
  //         end,
  //         title: appointment.reason,
  //         color: '#99C5C6'
  //       },
  //     ]);
  //     ]);
   
  //     ]);   
}

const [users, setUsers] = useState([]);
const [page, setPage] = useState(1);
const [userReponse,setUserResponse]=useState()

// const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?page=${page}`))

// // const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?limit=100`))



 useEffect(()=>{
  // fetchData()
},[page])

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
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{zIndex:'10000'}}
      >
        <Modal.Header className="" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Create New Booking
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
        {/* <div className="row">
      
        
          <div class=" d-flex align-items-center gap-1 py-2 equal-width">
            <label for="exampleInputEmail1" class="form-label white_space"> Select: </label>
            <select class="form-select mb-0" 
            value={appointment.visit} onChange={(e)=>handleChange("visit",e.target.value)} aria-label="Default select example">
              
              <option value="" disabled selected>None</option>
              {users.map((item)=>
             <option value={item.id}>{item.treatment}</option>
              )}
            </select>
          </div>
  
          

          <div class="d-flex align-items-center gap-1 equal-width py-2">
            <label class="white_space mb-0" for="">Booking</label>
            <input className="form-control w-100" type="text" value={appointment.reason} onChange={(e)=>handleChange("reason",e.target.value)} name="" id="" />
          </div>

          <div class="d-flex align-items-center equal-width py-2">
            <label class="white_space mb-0" for="">Description</label>
            <textarea class="form-control" id="" value={appointment.description} onChange={(e)=>handleChange("description",e.target.value)}  rows="3"></textarea>
          </div>

        </div> */}
        <div className='row'>
        <div className=" mx-auto mb-2"><input type="text" className='form-control' placeholder='Name' /></div>
        <div className=" mx-auto mb-2"><textarea name="" className='form-control' placeholder='Description' id="" cols="30" rows="10"></textarea></div>
        <div className=" mx-auto mb-2">
        <div className='form-floating'>
        <select name="" className='form-control form-select' id="packageSelect">
          <option value="0">$10,000</option>
          <option value="1">$20,000</option>
          <option value="2">$30,000</option>
        </select>
        <label htmlFor="packageSelect">Package</label>
        </div>
        </div>
        {/* <div className="col-md-10 mx-auto mb-2"><button type='submit' className='btn btn-primary w-100'>Done</button></div> */}
      </div>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" class="btn btn_green text-white">Save </button>
        </Modal.Footer>
        </form>
      </Modal>
        </form>
    );
  }
  function MohModal1({onHide, show,data:dataa,events,setEvents,}) {
    console.log(dataa.startStr,"kl");
    const{end,start}=dataa
    let initialState={
      startDate:start,
      endDate:end,
      patientName:"",
    }
    let initial={
      date:dataa.startStr,
      visit:"",
      reason:"",
      description:""
    }
    const[event,setEvent]=useState(initialState)
    const[appointment,setAppointment]=useState(initial)
    const handleChange=(key,value)=>{
      setAppointment({...appointment,[key]:value})
    }
console.log(event.title);

const handleSubmit=async(e)=>{

  e.preventDefault()
// //   console.log(appointment,"appointment");
// // // const result =await apiClient.post("/appointments/",appointment)
// // if(!result.ok) toast.error("Error")
// // toast.success("Successfully Submit")
onHide();


// fetchDataAll();
  // setEvents([
  //       ...events,
  //       {
  //         start,
  //         end,
  //         title: appointment.reason,
  //         color: '#99C5C6'
  //       },
  //     ]);
  //     ]);
   
  //     ]);   
}

const [users, setUsers] = useState([]);
const [page, setPage] = useState(1);
const [userReponse,setUserResponse]=useState()

// const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?page=${page}`))

// // const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?limit=100`))



 useEffect(()=>{
  // fetchData()
},[page])

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
        {/* <div className="row">
      
        
          <div class=" d-flex align-items-center gap-1 py-2 equal-width">
            <label for="exampleInputEmail1" class="form-label white_space"> Select: </label>
            <select class="form-select mb-0" 
            value={appointment.visit} onChange={(e)=>handleChange("visit",e.target.value)} aria-label="Default select example">
              
              <option value="" disabled selected>None</option>
              {users.map((item)=>
             <option value={item.id}>{item.treatment}</option>
              )}
            </select>
          </div>
  
          

          <div class="d-flex align-items-center gap-1 equal-width py-2">
            <label class="white_space mb-0" for="">Booking</label>
            <input className="form-control w-100" type="text" value={appointment.reason} onChange={(e)=>handleChange("reason",e.target.value)} name="" id="" />
          </div>

          <div class="d-flex align-items-center equal-width py-2">
            <label class="white_space mb-0" for="">Description</label>
            <textarea class="form-control" id="" value={appointment.description} onChange={(e)=>handleChange("description",e.target.value)}  rows="3"></textarea>
          </div>

        </div> */}
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
          <button type="submit" class="btn btn_green text-white">Save </button>
        </Modal.Footer>
        </form>
      </Modal>
        </form>
    );
  }