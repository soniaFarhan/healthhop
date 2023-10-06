import { MedicalServicesOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Myprofile = () => {



    const data =[
        {
        name:"Herry",
        chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
        img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}} />
        
        },
        {
        name:"Herry",
        chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
        img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>
        
        },
        {
        name:"Herry",
        chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
        img:
        <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>
        
        },
        
        
        
        
        ]


        
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
      <div>
      <div className="row">
          
        
          <div className="">
          {selectedImages.length > 0 && (
            
            <div className="row">
           {selectedImages.map((image, index) => (
             <div className="col-2" key={index}>
               <img src={image} alt={`Selected ${index}`} width={"100%"} height={"100px"}  />
             </div>
           ))}

           
         </div>
       )}
          <div className="col d-flex justify-content-start px-4">
           <div className="mt-2">
 
 
 
 
           <input  onChange={handleImageChange} type="file" name="" id="img" hidden multiple />
           <label  style={{fontSize:"60px", border:"3px dashed #9E9E9E"}} className="text-center px-4 rounded" htmlFor="img">
           <i class="bi bi-plus"></i>
           </label>
         
           </div>
          </div>


          </div>
 
          

             </div>

    

      </div>
    </>
  )
}

export default Myprofile
