import { MedicalServicesOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Updateprofile = () => {



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

        <div className="container px-4 fs_14px mt-4">

          {/* <h6 className=' fw-bold  ps-2 mt-4'>Summary Of Your Medical Practice:</h6>
          <div className='rounded-4  border border-1 border-dark py-2 px-3'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reprehenderit deleniti adipisci expedita sint sapiente velit in neque molestiae cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quas esse odio. Ut distinctio obcaecati molestiae, maiores quos eius neque.</p>
          </div> */}
          <div class="mb-3">
          <label for="" class="form-label fw-bold">Summary Of Your Medical Practice:</label>
          <textarea class="form-control" id="" rows="3"></textarea>
        </div>

          {/* <h6 className=' fw-bold  ps-2 mt-4'>Breif Description:</h6>
          <div className='rounded-4  border border-1 border-dark py-2 px-3'>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reprehenderit deleniti adipisci expedita sint sapiente velit in neque molestiae cupiditate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quas esse odio. Ut distinctio obcaecati molestiae, maiores quos eius neque.</p>
          </div> */}

          <div class="mb-3">
          <label for="" class="form-label fw-bold">Breif Description:</label>
          <textarea class="form-control" id="" rows="3"></textarea>
        </div>



          <div className="row mt-2 me-md-5">
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Address</label>
              <input type="text" className='form-control rounded-4 mt-1  fs_14px p-3' placeholder='Add'/>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Your Buissnes Offer The Following:</label>
              <select className='form-control rounded-4 mt-1  form-select fs_14px p-3'  name="" id="">
                <option value="">4&5 Star Hotel Accomodation</option>
                <option value="">4&5 Star Hotel Accomodation</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="" className='fw-bold'>Language</label>
              <select className='form-control rounded-4 mt-1 form-select fs_14px p-3'  name="" id="">
                <option value="" selected>English</option>
              </select>
            </div>
          </div>
          <div className="row mt-4 me-md-5 bg-white py-4 px-3 rounded rounded-4">
            <p className='fw-bold mb-0'>Pictures & Videos</p>
            <div className="col-md-12">

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
          </div>
 
          
          <div className="col text-center">
           <div className="mt-2">
 
 
 
 
           <input  onChange={handleImageChange} type="file" name="" id="img" hidden multiple />
           <label  style={{fontSize:"60px"}} className="text-center " htmlFor="img">
           <i class="bi bi-plus"></i>
           </label>
         
           </div>
          </div>
             </div>
 
            </div>
            <div className="col-md-12">
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
          </div>
 
          
          <div className="col text-center">
           <div className="mt-2">
 
 
 
 
           <input  onChange={handleImageChange} type="file" name="" id="img" hidden multiple />
           <label  style={{fontSize:"60px"}} className="text-center " htmlFor="img">
           <i class="bi bi-plus"></i>
           </label>
         
           </div>
          </div>
             </div>
            </div>
            
          </div>

          <div className=" my-5 row  pt-2 " style={{borderRadius:"12px",paddingBottom:"90px"}}>
           
    <div className="col-md-9 " style={{height:"auto"}}>


    <div className="d-flex justify-content-between">

      <h4 className='ms-1'>  Medical Staff   </h4>
    <div className=" " >
       
       <Button className='text_color fw-bold' variant="outlined" sx={{color:"red",border:"1px solid #39B7BA",borderRadius:"25px" ,fontSize:"9px"}}> <MedicalServicesOutlined style={{ fontSize: "19px",marginRight:"6px" }} /> Upload profile</Button>
    
   
   </div>
</div>

{
  data.map((e)=>{
    return(

      <div className='d-flex align-items-center   flex-column flex-md-row shadow rounded-4 p-2 mb-3'>
      <div className='p-2'>
      <div style={{width:"8rem"}}>
      <img className='img-fluid' src={require("../assets/h-card.png")} alt="" />
      </div>
      </div>

      <div>
      <div className='me-auto'>
        <div className="d-flex justify-content-between">
           <h5> {e.name} </h5>
           

        </div>
        <div className="d-flex justify-content-between aling-items-center">
          <p>Hair transplant procedure</p>
         
        </div>

      <div className='d-flex align-items-center gap-2 flex-column flex-md-row'>
          <p style={{fontSize:"12px"}}>
          {e.chat}
          </p>
         
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

      </div>
    </>
  )
}

export default Updateprofile
