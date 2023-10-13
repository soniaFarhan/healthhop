import { BorderColorOutlined, Chat, LocationOnOutlined, MedicalServicesOutlined } from '@mui/icons-material'
import { Avatar, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
export const BusinessProfile = () => {
  const [repNameModal, setRepNameModal] = useState(false);
  const [businessName, setBusinessName] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const data = [
    {
      name: "Dr.Herry",
      chat: "      Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img:
        <img src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },
    {
      name: "Dr.Herry",
      chat: "        Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img:
        <img src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },
    {
      name: "Dr.Herry",
      chat: "        Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img:
        <img src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")} width={"100%"} height={"100%"} alt="" style={{ objectFit: "contain" }} />

    },




  ]

  return (
    <>
      <div className="">

        <div className='bp-img d-flex justify-content-center mt-3 align-items-center '>

          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='text-white'>Medical Business Name</h2><BorderColorOutlined onClick={()=>setBusinessName(true)} className="ms-2" sx={{color:"#07A6A9",cursor:"pointer"}}/>
          </div>


        </div>
        <div className="mt-2" style={{}}>
          <div className=" d-md-flex aling-items-center justify-content-between">
            <div className="d-md-flex aling-items-center">



              <div style={{ position: "relative", bottom: "70px", left: "50px", width: "148px" }}>

                <Avatar src={require("../assets/WhatsApp Image 2023-08-29 at 11.43.13 AM (1).png")} sx={{ width: 137, height: 137 }} />
              </div>

              <div className="mb-auto ms-5">
                <div className='d-flex justify-content-between align-items-center'>
                  <h5>Rep name here:</h5><BorderColorOutlined onClick={()=>setRepNameModal(true)} className="ms-2" sx={{color:"#07A6A9",cursor:"pointer"}}/>
                </div>
                <p style={{ fontSize: "13px" }}>medicalporvider@gamil.com</p>
              </div>
              <p className=' ms-md-3 ms-5 ' style={{ fontSize: "13px", marginTop: '32px' }}>  +92838489093</p>
            </div>


            <div className=" mx-5 " style={{ marginTop: "15px" }}>
              <Link to={"/Updateprofile"}>
                <Button className='text_color fw-bold' variant="outlined" sx={{ color: "red", border: "1px solid #39B7BA", borderRadius: "25px", fontSize: "9px" }}> <MedicalServicesOutlined style={{ fontSize: "19px", marginRight: "6px" }} /> Publish Profile</Button>
              </Link>

            </div>
          </div>


        </div>



        <div className="row mt-md-0 my-3">
          <div className="col-lg-6 mb-3 ">
            <div className='me-md-2 h-100 shadows4 bg-white pt-3 ps-3 pe-5'  style={{ borderRadius: "20px", paddingBottom: "100px" }}>
            <div className='d-flex justify-content-between align-items-center'>
            <h5>Summary of your medical practice:</h5><BorderColorOutlined onClick={()=>setModalShow(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>
            </div>
            <p className='cu-color' style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam fugiat corrupti veniam, impedit praesentium sapiente odio, iure vel alias asperiores hic, reiciendis consectetur magni! Odit ullam dolor optio distinctio.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident impedit omnis itaque cumque earum quod laboriosam, eaque sequi, optio magnam laudantium ratione, iure architecto animi? Esse labore quibusdam quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corporis eius quas reiciendis magnam modi ipsam ipsum doloribus tempora, dicta ea perferendis quo aspernatur fugit, placeat obcaecati sit commodi nesciunt?
            </p>
            </div>

          </div>
          <div className="col-lg-6  mb-3 ">

            <div className=' my-3 pb-3 ms-md-2 h-100'>
              <div className=" d-flex aling-items-center">

                < LocationOnOutlined sx={{ color: "#39B7BA" }} /> <p>Address of medical provider here</p>
              </div>
              <div className="google-map-code y" >


                <iframe className='y' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin&disableDefaultUI=1" width="100%" frameborder="0" style={{ border: "0", borderRadius: "20px" }} allowfullscreen="" aria-hidden="false" tabindex="999"></iframe>
              </div>
            </div>
          </div>
        </div>


        <div className="mb-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-5 mt-md-0 my-3" style={{ borderRadius: "20px" }}>
          <div className="d-flex justify-content-between aling-items-center">

        <h4> Details Description:</h4>
        <BorderColorOutlined onClick={()=>setModalShow(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>
         </div>

          <p className='pe-md-5 me-md-5 cu-color' style={{ fontSize: "14px" }}>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi quibusdam voluptate voluptatibus suscipit dolores iste incidunt enim sunt pariatur ullam, modi similique quis rem nostrum inventore iusto. Repellendus facere odio libero explicabo, corporis sunt ducimus cumque labore quo impedit quibusdam placeat neque tempora quam, tenetur adipisci asperiores, beatae animi mollitia vitae nam rerum nulla dolorum. Officiis nihil, corrupti molestiae exercitationem quisquam excepturi repellendus, cupiditate officia delectus ipsum consequuntur. Atque iusto porro illo accusantium a, aperiam saepe sit aspernatur, temporibus iure distinctio. Tenetur maxime labore totam laborum obcaecati optio nulla soluta deleniti, consectetur sed, omnis distinctio accusantium harum molestias. Consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusamus, debitis nam perspiciatis impedit labore repudiandae tenetur? Quibusdam accusamus aut a. Recusandae aliquid perspiciatis rem ipsa eius at dolor cum.        </p>

        </div>



        <div className="row mb-3">
          <div className="col-md-6">
            <div className="d-flex flex-column h-100 my-3 me-md-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-5 mb-0" style={{ borderRadius: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 style={{ fontSize: "18px" }}>Your Business Offers the Following Services:</h5>
                <BorderColorOutlined onClick={()=>setModalShow2(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>
              </div>
              <p className="linke">
                <ul className="d-flex flex-column fs_14px cu-color">
                  <li><Link>485 Star Hotel Accommodation</Link></li>
                  <li><Link>3 Star Hotel Accommodation</Link></li>
                  <li><Link>Transportation To and From Airport/Clinic/Hotel</Link></li>
                  <li><Link>Visa Support</Link></li>
                  <li><Link>Travel Health Insurance or Medical Tourism Health Insurance</Link></li>
                  <li><Link>Sightseeing Support Bookings</Link></li>
                  <li><Link>Other Language and Translation Support</Link></li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-md-6 pt-md-0 pt-4">
            <div className="d-flex flex-column h-100 my-3 ms-md-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-md-5 mb-0" style={{ borderRadius: "20px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 style={{ fontSize: "18px" }}>Your Business Offers Care in the Following Languages:</h5>
                <BorderColorOutlined onClick={()=>setModalShow3(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>
              </div>
              <p className="pe-md-5 me-md-5 linke">
                <ul className="d-flex flex-column">
                  <li><Link>Spanish</Link></li>
                  <li><Link>Turkish</Link></li>
                  <li><Link>Arabic</Link></li>
                  <li><Link>Urdu</Link></li>
                  <li><Link>Hindi</Link></li>
                  <li><Link>Persian</Link></li>
                </ul>
              </p>
            </div>
          </div>
        </div>


       <div className='mt-5'>
       <h4 className='ms-2 mt-3 fw-bold'>Procedures:</h4>
        <div className="mt-3 shadows4 bg-white pt-3 ps-3 pb-5 pe-5" style={{ borderRadius: "20px" }}>
          <div className="d-flex justify-content-between aling-items-center">

            <h6 className='fw-bold'>Hair Transplant</h6>

            <BorderColorOutlined onClick={()=>setModalShow4(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>
          </div>
          <h6 className='fw-semibold' style={{ color: "rgb(7,166,169)" }}> Sub-category name</h6>
          <div className='pe-md-5 me-md-5' style={{ fontSize: "14px" }}>
            <p className='cu-color fs_14px'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quasi doloremque dolorum non magnam. Exercitationem, voluptatibus accusamus, itaque animi voluptatem consequatur esse illo illum molestias neque aspernatur, quas tempore autem.
            </p>
            <div className="d-flex me-auto" >
              <div className="me-2">

                <div className="d-flex" style={{ color: "rgb(7,166,169)" }}>
                  <div className="me-2">
                    <i class="bi bi-1-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    Average price range for the procedure:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 to 1000 USA</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-2-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    All inclusive price range:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 to 1000 USA</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-3-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    Instant booking  fixed price for procedure only:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500  USA</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-4-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold' >
                    Instant booking  fixed price for All-inclusive:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 USA</p>

                </div>




              </div>


            </div>
            <div className="d-flex flex-wrap aling-items-center ">
              <div className=""><img src={require("../assets/blog-card-1.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-2.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-3.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-4.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-5.png")} width={"100px"} height={"100px"} alt="" /></div>

            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between aling-items-center">

            <h6 className='fw-bold'>Hair Transplant</h6>

            {/* <BorderColorOutlined sx={{ color: "#07A6A9" }} /> */}
          </div>
          <h6 className='fw-semibold' style={{ color: "#07A6A9" }}> Sub-category name</h6>
          <div className='pe-md-5 me-md-5' style={{ fontSize: "14px" }}>
            <p className='cu-color fs_14px'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quasi doloremque dolorum non magnam. Exercitationem, voluptatibus accusamus, itaque animi voluptatem consequatur esse illo illum molestias neque aspernatur, quas tempore autem.
            </p>
            <div className="d-flex me-auto" >
              <div className="me-2">

                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-1-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    Average price range for the procedure:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 to 1000 USD</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-2-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    All inclusion price range:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 to 1000 USD</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-3-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold'>
                    Istant booking  fixed price for procedure only:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500  USD</p>


                </div>
                <div className="d-flex" style={{ color: "#07A6A9" }}>
                  <div className="me-2">
                    <i class="bi bi-4-circle " style={{ fontSize: "20px" }}></i>
                  </div>
                  <p className='my-auto me-auto fw-semibold' >
                    Istant booking  fixed price for All-inclusive:

                  </p>
                  <p className='my-auto mx-3' style={{ color: "black" }}>500 USD</p>

                </div>




              </div>


            </div>
            <div className="d-flex flex-wrap aling-items-center">
              <div className=""><img src={require("../assets/blog-card-1.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-2.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-3.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-4.png")} width={"100px"} height={"100px"} alt="" /></div>
              <div className=""><img src={require("../assets/blog-card-5.png")} width={"100px"} height={"100px"} alt="" /></div>

            </div>
          </div>
          <hr />

        </div>
       </div>










        <div className=" my-3 row   pt-2 " style={{ borderRadius: "12px", paddingBottom: "90px" }}>
          <div className="col-md-9 " style={{ height: "auto" }}>
            <h4 className='ms-1 fw-bold'>  Medical Staff   </h4>

            {
              data.map((e) => {
                return (

                  <div className='d-flex align-items-center   flex-column flex-md-row shadows4 bg-white rounded-4 p-2 mb-3' style={{ borderRadius: "12px" }}>
                    <div className='p-1 me-2'>
                      <div style={{ width: "8rem" }}>
                        <img className='img-fluid' src={require("../assets/h-card.png")} alt="" />
                      </div>
                    </div>

                    <div>
                      <div className='me-auto'>
                        <div className="d-flex justify-content-between">
                          <h6 > {e.name} </h6>
                          <BorderColorOutlined onClick={()=>setModalShow5(true)} sx={{color:"#07A6A9",cursor:"pointer"}}/>

                        </div>
                        <div className="me-5  ">
                          <div className="" style={{ fontSize: "13px" }}>
                            <p style={{ opacity: "0.4" }}>Hair transplant procedure</p>
                          </div>

                          <div className='d-flex align-items-center gap-2 flex-column me-5 flex-md-row me-3'>
                            <p style={{ fontSize: "12px" }}>
                              {e.chat}
                            </p>

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

      {repNameModal&& <RepNameModal
    show={repNameModal}
    onHide={() => setRepNameModal(false)}
    />}
      {businessName&& <BusinessName
    show={businessName}
    onHide={() => setBusinessName(false)}
    />}
      {modalShow&& <MohModal1
    show={modalShow}
    onHide={() => setModalShow(false)}
    />}
      {modalShow2&& <MohModal2
    show={modalShow2}
    onHide={() => setModalShow2(false)}
    />}
      {modalShow3&& <MohModal3
    show={modalShow3}
    onHide={() => setModalShow3(false)}
    />}
      {modalShow4&& <MohModal4
    show={modalShow4}
    onHide={() => setModalShow4(false)}
    />}
      {modalShow5&& <MohModal5
    show={modalShow5}
    onHide={() => setModalShow5(false)}
    />}
    </>
  )
}

function RepNameModal({onHide, show,}) {
  
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
        Rep Name
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <>
      <h4 className="text-center">
        Edit Rep Name
      </h4>
      <div class="mb-3">
      <label htmlFor="">Edit Rep Name</label>
        <input
          style={{ fontSize: "9px" }}
          class="form-control"
          placeholder="Name"
        />
      </div>
    </>
      
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Save </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}
function BusinessName({onHide, show,}) {
  
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
        Medical Business Name
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <>
      <h4 className="text-center">
        Edit Medical Business Name
      </h4>
      <div class="mb-3">
      <label htmlFor="">Edit Medical Business Name</label>
        <input
          style={{ fontSize: "9px" }}
          class="form-control"
          placeholder="Medical Business Name"
        />
      </div>
    </>
      
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Save </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}

function MohModal1({onHide, show,}) {
  
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
         Description
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <>
      <h4 className="text-center">
        {" "}
        Summary of your Medical <br /> Practice:{" "}
      </h4>
      <div class="mb-3">
        <textarea
          style={{ fontSize: "9px" }}
          class="form-control"
          placeholder="Tell People How great you are qualifications and why  they should chose your clinic "
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
    </>
      
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Save </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}
function MohModal2({onHide, show,}) {
  
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
        Business Services
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <div className="scroll-container">
      <div className="content">
        <h6 className="text-center">
          Which of these exter Services dose your Busniness <br /> provide your
          medical tourism Patients?
        </h6>
        <div class="form-check my-4 ">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            4&3 star Hotel Accomodation
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            3 star Hotel Accomodation
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Travel Excursions
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Transportation to and from Airport/Clinic/Hotel
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Vise Suppert
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Sightseeing Support Booking
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Medical Complication Insurance/Travel Insurance
          </label>
        </div>
        <hr />
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
function MohModal3({onHide, show,}) {
  
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
       Language
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <div className="scroll-container">
      <div className="content">
        <h6 className="text-center">
          Choose the Language, you want to <br /> provide your services in
        </h6>
        <div class="form-check my-4 ">
          <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Arabic
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
         Azerbaijani
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Dutch
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          English
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          Farsi
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          French
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          German
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          Hindi
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          Italian
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Pashto
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Polish
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Portuguese
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Russian
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Spanish
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Turkish
        </label>
      </div>
      <hr />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
        Ukrainian
          </label>
        </div>
        <hr />
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
          Urdu
          </label>
        </div>
        <hr />
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
function MohModal4({onHide, show,}) {
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
       Category
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <div className="scroll-container">
      <div class="mb-3 d-grid gap-3 p-0 content">
        <h6 className="text-center">
          {" "}
          Let's set up the Procedures your clinic provides! We will add these
          one at a time. so let's add the first procedure here.
        </h6>{" "}
        <TextField
          id="outlined-basic"
          label="Choose category"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label=" Choose Sub-category"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <textarea
          style={{ fontSize: "12px", height: "150px" }}
          class="form-control"
          placeholder="Discription "
          id="exampleFormControlTextarea1"
          rows="29"
        ></textarea>
        <div className="row">
          <div className="">
            {selectedImages.length > 0 && (
              <div className="row">
                {selectedImages.map((image, index) => (
                  <div className="col-4" key={index}>
                    <img
                      src={image}
                      alt={`Selected ${index}`}
                      width={"100%"}
                      height={"100px"}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col text-center">
            <div className="mt-2">
              <input
                onChange={handleImageChange}
                type="file"
                name=""
                id="img"
                hidden
                multiple
              />
              <label
                style={{ fontSize: "60px" }}
                className="text-center "
                htmlFor="img"
              >
                <i class="bi bi-plus"></i>
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center ">
          <div className="">
            <TextField
              id="outlined-basic"
              label=" Min"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className="">
            {" "}
            <TextField
              id="outlined-basic"
              label="Max"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        
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
function MohModal5({onHide, show,}) {
  
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
       Medical Staff
        </Modal.Title>
      </Modal.Header>
      <form >
      <Modal.Body>
      <>
      <h4 className="text-center">Add Medical Staff</h4>

      <div class="mb-3 d-grid gap-3">
        <div className=""></div>

        <TextField
          hidden
          type="file"
          id="q"
          label=" Upload Image"
          variant="outlined"
          style={{ width: "100%", backgroundColor: "#DFDFDF" }}
        />
        <label
          className="px-2 py-3 my-auto"
          htmlFor="q"
          style={{
            backgroundColor: "#DFDFDF",
            borderRadius: "9px",
            border: "2px dashed #8B8B8B",
          }}
        >
          Upload image
        </label>

        <TextField
          id="outlined-basic"
          label="Mesical Staff Frist Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label=" Categroy name"
          variant="outlined"
          style={{ width: "100%" }}
        />

        <textarea
          style={{ fontSize: "9px" }}
          class="form-control"
          placeholder="Discription "
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>

      
    </>
      
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Save </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}