import { Chat, MedicalServicesOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";

const Meet = () => {
  return (
    <>
      <div className="bp-img d-flex justify-content-center align-items-center ">
       
      </div>
      <div className="mt-2" style={{}}>
        <div className=" d-md-flex aling-items-center justify-content-between">
          <div className="d-md-flex aling-items-center">
            <div
              style={{
                position: "relative",
                bottom: "70px",
                left: "50px",
                width: "148px",
              }}
            >
              <Avatar src="" sx={{ width: 137, height: 137 }} />
            </div>

            <div className="mb-auto ms-5 d-flex aling-items-center gap-3">
              <h5>Rep name here</h5>
              <p  style={{  }}>medicalporvider@gamil.com</p>
              <p
         
              style={{  }}
            >
              {" "}
              +92838489093
            </p>

            </div>
           
          </div>

          <div className=" mx-5 " style={{ marginTop: "15px" }}>
   
       
          </div>

          <div className="d-flex justify-content-end">
          <div className='mb-3' >
                        <select class="form-select " aria-label="Default select example"  style={{backgroundColor:"#07A6A9",color:"white"}}>
                        <option selected> send to patient</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
          <div className="mt-5">


<Button variant="text" style={{color:'#07A6A9'}} ><Chat/></Button>

  </div>

  
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
