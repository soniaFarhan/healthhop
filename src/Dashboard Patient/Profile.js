import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Profile = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    function handleImageChange(event) {
        const files = event.target.files;
        const newImages = [];
    
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(files[i]);
    
          reader.onload = () => {
            newImages.push(reader.result);
    
            if (newImages.length === files.length) {
              setSelectedImages([...selectedImages, ...newImages]);
            }
          };
        }
      }
  return (
  
    <>

    <div className=' mt-3 container px-0 w-100' style={{borderRadius:"20px",overflow:"hidden",backgroundColor:"white"}}>
        <div className='px-4' style={{backgroundColor:"#91D7D8",}}>
            <h2 className='py-3 ' style={{color:"white"}}>Profile Details</h2>
        </div>
        <div className="col d-flex justify-content-start px-4">
           <div className="mt-2">
 
 
 
 
           <input  onChange={handleImageChange} type="file" name="" id="img" hidden multiple />
           <label  style={{fontSize:"60px", border:"3px dashed #9E9E9E"}} className="text-center px-4 rounded" htmlFor="img">
           <i class="bi bi-plus"></i>
           </label>
         
           </div>
          </div>



          <div className="row mt-2 py-2 px-3">
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Full Name</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Name'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Age</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Age'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Date of Birth</label>
              <input type="date" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Dob'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Gender</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Gender'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Height</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Height'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Current Weight</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Current Weight'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Current Medications</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Current Medications'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Please List Any Existing Medical Conditions (if any)</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Medication'/>
            </div>
            <div className="col-md-12 mt-3">
              <label htmlFor="" className='fw-bold'>Country</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='Country'/>
            </div>
            <div className="col-md-12 mt-3">
              <label htmlFor="" className='fw-bold'>“Are you allergic to any medications. If so, please list them here</label>
              <input type="text" className='form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3' placeholder='List here'/>
            </div>
            </div>
            <div className="col mt-4 px-4">
           <label htmlFor="" className='fw-bold'>If you would like to upload any photos or videos for your medical provider, you may do so here.</label>
           <div className="mt-2">
 
 
 
           <input  onChange={handleImageChange} type="file" name="" id="img" hidden multiple />
           <label  style={{fontSize:"90px", border:"3px dashed #9E9E9E"}} className="text-center px-4 rounded" htmlFor="img">
           <i class="bi bi-plus"></i>
           </label>
         
           </div>
          </div>
          <div className=" mt-2 py-2 px-3">
            <Button style={{backgroundColor:"#07A6A9",border:"none"}} >Save</Button>
          </div>
    </div>
    </>
  )
}

export default Profile