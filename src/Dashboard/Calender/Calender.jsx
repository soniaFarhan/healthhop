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


const Calender = () => {
  
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
        left: 'dayGridMonth,timeGridWeek,timeGridDay', // Add week and day view buttons
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
   {modalShow&& <MohModal
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
//   console.log(appointment,"appointment");
// // const result =await apiClient.post("/appointments/",appointment)
// if(!result.ok) toast.error("Error")
// toast.success("Successfully Submit")
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
// const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?limit=100`))



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
          Create New Appointment
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
        <div className="row">
      
        {/* <div class="d-flex align-items-center gap-1 equal-width py-2">
            <label class="white_space mb-0" for="">Patient Name:</label>
            <input className="form-control" value={appointment.patient} onChange={(e)=>handleChange("patient",e.target.value)} type="text" name="" id="" />
          </div> */}
          <div class=" d-flex align-items-center gap-1 py-2 equal-width">
            <label for="exampleInputEmail1" class="form-label white_space">Visit: </label>
            <select class="form-select mb-0" 
            value={appointment.visit} onChange={(e)=>handleChange("visit",e.target.value)} aria-label="Default select example">
              
              <option value="" disabled selected>None</option>
              {users.map((item)=>
             <option value={item.id}>{item.treatment}</option>
              )}
            </select>
          </div>
  
          {/* <div class="d-flex align-items-center gap-1 equal-width">
            <label class="white_space mb-0" for="">Date: </label>
            <input className="form-control" type="date" name="" id="" />
          </div> */}

          <div class="d-flex align-items-center gap-1 equal-width py-2">
            <label class="white_space mb-0" for="">Reason</label>
            <input className="form-control w-100" type="text" value={appointment.reason} onChange={(e)=>handleChange("reason",e.target.value)} name="" id="" />
          </div>

          <div class="d-flex align-items-center equal-width py-2">
            <label class="white_space mb-0" for="">Description</label>
            <textarea class="form-control" id="" value={appointment.description} onChange={(e)=>handleChange("description",e.target.value)}  rows="3"></textarea>
          </div>

        </div>
       
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" class="btn btn_bg text-white">Save </button>
        </Modal.Footer>
        </form>
      </Modal>
        </form>
    );
  }