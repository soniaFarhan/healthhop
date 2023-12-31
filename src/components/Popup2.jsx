import {
  ArrowBack,
  Login,
  MedicalServices,
  MedicalServicesOutlined,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import ProgressMobileStepper from "./Steper";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function MyVerticallyCenteredModal(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < 9) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleback = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      setActiveStep(0);
    }
  };

  const styles = {
    progress: {
      backgroundColor: "red",
    },
  };

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

  const data = [
    {
      id: 1,
      img: (
        <img
          src={require("../assets/WhatsApp Image 2023-09-13 at 4.49.49 PM.png")}
          alt=""
          style={{ width: "100%" }}
        />
      ),
      heading: <h3>Set up your Patient profile</h3>,
      text: (
        <p className="text-center" style={{ fontSize: "10px" }}>
          In publishing and graphic design . lorem ipsum is placeholder text
          commonly <br /> to demonstrate the visual form of
        </p>
      ),
      login: (
        <Link to="/?method=patient">
          <Button
            style={{
              backgroundColor: "white",
              color: "#07A6A9",
              padding: "16px 80px",
              fontSize: "30px",
              width: "100%",
              border: "0px",
              fontWeight: "500",
              paddingBottom: "5px",
            }}
          >
            login
          </Button>
        </Link>
      ),
    },
    {
      id: 2,

      text: "Data 3",
      heading: "About You",
      input: (
        <div className="mb-5">
          <TextField
            className="my-2"
            id="outlined-basic"
            label=" Busniness name"
            variant="outlined"
            style={{ width: "100%" }}
          />

          <TextField
            className="my-2"
            id="outlined-basic"
            label=" Your name"
            variant="outlined"
            style={{ width: "100%" }}
          />

          <TextField
            className="my-2"
            id="outlined-basic"
            label="  Busniness  email eddress"
            variant="outlined"
            style={{ width: "100%" }}
          />
          <TextField
            className="my-2"
            id="outlined-basic"
            label="  Your phone number "
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>
      ),
      input4: (
        <TextField
          id="outlined-basic"
          label=" Enter phone number"
          variant="outlined"
          style={{ width: "100%" }}
        />
      ),
      text: (
        <p className="text-center" style={{ fontSize: "10px" }}>
          Tell us more about yourself and you business
        </p>
      ),
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
      googleicon: (
        <div className="d-flex justify-content-center aling-item-center mt-4 mb-1">
          <div className="">
            <img src={require("../assets/fb.svg").default} alt="" />
            {/* img src={require("https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg")} alt="" /> */}
          </div>
          <div className="">
            <img src={require("../assets/google.svg").default} alt="" />
          </div>
        </div>
      ),
    },

    {
      id: 3,
      stepper: <ProgressMobileStepper activeStep={activeStep} />,
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
      text: "Data 3",
      heading: "Password",
      input: (
        <div className="mb-5">
          <TextField
            className="my-2"
            id="outlined-basic"
            label=" Password"
            variant="outlined"
            style={{ width: "100%" }}
          />

          <TextField
            className="my-2"
            id="outlined-basic"
            label=" Re-enter   password"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>
      ),
      text: (
        <p className="text-center" style={{ fontSize: "10px" }}>
          {" "}
          Enter your password for business profile
        </p>
      ),
    },
    {
      id: 4,
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
      heading: (
        <h6>
          Which of these exter Services dose your Busniness <br /> provide your
          medical tourism Patients
        </h6>
      ),
      checkbox: (
        <div className="scroll-container">
          <div className="content">
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
      ),
    },

    {
      id: 4,
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
      heading: (
        <h6>
          Choose the Language, you want to provide <br />
          your services in
        </h6>
      ),
      checkbox: (
        <div className="scroll-container">
          <div className="content">
            <div class="form-check my-4 ">
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
                Turkey
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
                Persian
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
                Arabic
              </label>
            </div>
            <hr />
          </div>
        </div>
      ),
    },

    {
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),

      input: (
        <div className="scroll-container">
          <div class="mb-3 d-grid gap-3 p-0 content">
            <h6 className="text-center">
              {" "}
              Let's set up the Procedures your clinic provides! We will add
              these one at a time. so let's add the first <br /> procedure here{" "}
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
            <div className="d-flex gap-2 ">
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
      ),
    },

    {
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),

      heading: (
        <h4 className="text-center">
          {" "}
          Summary of your Medical <br /> Practice:{" "}
        </h4>
      ),
      input: (
        <div class="mb-3">
          <textarea
            style={{ fontSize: "9px" }}
            class="form-control"
            placeholder="Tell People How great you are qualifications and why  they should chose your clinic "
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
      ),
    },
    // {
    //   logo: (
    //     <div className="my-4">
    //       <img
    //         src={require("../assets/Flag_of_Turkey.png")}
    //         alt=""
    //         width={"60px"}
    //       />
    //     </div>
    //   ),
    //   heading: <h4>Brief Description</h4>,
    //   input: (
    //     <div class="mb-3">
    //       <textarea
    //         style={{ fontSize: "9px" }}
    //         class="form-control"
    //         placeholder="Tell People How great you are qualifications and why  they should chose your clinic "
    //         id="exampleFormControlTextarea1"
    //         rows="10"
    //       ></textarea>
    //     </div>
    //   ),
    // },
    {
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
      heading: <h4 className="text-center">Add Medical Staff</h4>,
      input: (
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
      ),
      skip: (
        <div className="mt-2">
          <Button
            style={{
              backgroundColor: "white",
              color: "#07A6A9",
              padding: "16px 80px",
              fontSize: "15px",
              width: "100%",
              border: "0px",
            }}
          >
            skip
          </Button>
        </div>
      ),
    },
    {
      heading: <h5>Your Address</h5>,

      text: <p className="text-center"> where can Clients find you? </p>,
      map: (
        <>
          <div
            className=" ms-40px"
            style={{
              position: "absolute",
              top: "150px",
              left: "100px",
              zIndex: "99",
              width: "70%",
            }}
          >
            <TextField
              id="outlined-basic"
              label=" Categroy name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div className="google-map-code" style={{ position: "relative" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin&disableDefaultUI=1"
              width="100%"
              height={"300"}
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </>
      ),
      logo: (
        <div className="my-4">
          <img
            src={require("../assets/Flag_of_Turkey.png")}
            alt=""
            width={"60px"}
          />
        </div>
      ),
    },
  ];

  return (
    <Modal
      style={{ backgroundColor: "white" }}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ position: "relative", padding: "0px" }}>
        {data[activeStep]?.img}

        {data[activeStep] === data[0] || (
          <Button style={{}} onClick={handleback} variant="text">
            {" "}
            <ArrowBack />{" "}
          </Button>
        )}

      
        <Modal.Title
          className="text-center"
          style={{ width: "100%" }}
          id="contained-modal-title-vcenter"
        >
          <div
            style={{ marginLeft: "80px" }}
            className="text-center d-flex   ps-5"
          >
            {data[activeStep] === data[0] ||
             
           
              <ProgressMobileStepper activeStep={activeStep} />
            }

            <div className="me-5">{data[activeStep].logo}</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-4 my-2">
        <h3 className="text-center mb-2">{data[activeStep].heading}</h3>
        <p> {data[activeStep].text} </p>

        {data[activeStep].checkbox}
        {data[activeStep].map}

        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input}
        </div>

        {data[activeStep] === data[7] || data[activeStep] === data[5] ? (
          <div className="pt-2">
            <Button
              style={{
                backgroundColor: " transparent",
                color: "#07A6A9",
                padding: "16px 80px",
                fontSize: "15px",
                width: "100%",
                border: "1px solid #07A6A9",
              }}
            >
              {data[activeStep] === data[5] ? "save" : "Add"}
            </Button>
          </div>
        ) : (
          ""
        )}

        <div className="pt-2">
          {activeStep < 8 ? (
            <Button
              onClick={() => handleNext()}
              style={{
                backgroundColor: "#07A6A9",
                color: "white",
                padding: "16px 80px",
                fontSize: "15px",
                width: "100%",
              }}
            >
              {data[activeStep] == data[0] ? "Start Setup" : "continue"}
            </Button>
          ) : (
            <Link to="/inquiries">
              <Button
                onClick={() => handleNext()}
                style={{
                  backgroundColor: "#07A6A9",
                  color: "white",
                  padding: "16px 80px",
                  fontSize: "12px",
                  width: "100%",
                }}
              >
                {data[activeStep] == data[0] ? "Start Setup" : "continue"}
              </Button>
            </Link>
          )}
          {data[activeStep].skip}
        </div>

        <div className="text-center">{data[activeStep]?.login}</div>
        {data[activeStep]?.googleicon}
      </Modal.Body>
    </Modal>
  );
}

function Popup2({ show }) {
  const [modalShow, setModalShow] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    setModalShow(show);
  }, [show]);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <button
        className="btn btn_light rounded-pill fs_10px white_space"
        onClick={() => setModalShow(true)}
      >
        <MedicalServicesOutlined
          fontSize="small"
          className="my-auto"
          style={{ marginRight: "5px" }}
        />
        Medical Provider
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Popup2;
