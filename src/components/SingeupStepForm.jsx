import React from "react";
import { useState } from "react";
import ProgressMobileStepper from "./Steper";
import { ArrowBack } from "@mui/icons-material";
import { TextField } from "@mui/material";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const SingeupStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step === 9 ? step : step + 1);
  };
  console.log(step);
  const prevStep = () => {
    setStep(step === 1 ? step : step - 1);
  };

  return (
    <>
      <div className="" style={{}}>
        <div
          className="d-flex justify-content-center align-items-center layout"
          style={{ background: "white" }}
        >
          <div
            className=" my-5 rounded-4 shadows "
            style={{ backgroundColor: "shadows", width: "550px" }}
          >
            <div className="head d-flex  justify-content-between aling-items-ceneter">
              {step === 1 && (
                <img
                  src={require("../assets/WhatsApp Image 2023-09-13 at 4.49.49 PM.png")}
                  alt=""
                  style={{ width: "100%" }}
                />
              )}

              <div
                className="my-3"
                style={{ position: step === 1 ? "absolute" : "relative" }}
              >
                <button className="btn ms-2 py-3" onClick={prevStep}>
                  {" "}
                  <ArrowBack />
                </button>
              </div>

              {step === 1 || <ProgressMobileStepper activeStep={step} />}

              <div className="my-auto me-3">
                {step === 1 || (
                  <div className="">
                    <img
                      src={require("../assets/Flag_of_Turkey.png")}
                      alt=""
                      width={"60px"}
                    />
                  </div>
                )}
              </div>
            </div>
            <hr className="m-0" />
            <div className="body m-4 ">
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              {step === 4 && <Step4 />}
              {step === 5 && <Step5 />}
              {step === 6 && <Step6 />}
              {step === 7 && <Step7 />}
              {step === 8 && <Step8 />}
              {step === 9 && <Step9 />}
            </div>

            <div className="footer m-4 mt-1 mb-3 pb-1">
              <div className="pt-2 pb-0">
                {/* nextbutton..............................       */}
                {step < 9 ? (
                  <Button
                    onClick={() => nextStep()}
                    style={{
                      backgroundColor: "#07A6A9",
                      color: "white",
                      padding: "16px 80px",
                      fontSize: "15px",
                      width: "100%",
                    }}
                  >
                    {step == 1 ? "Start Setup" : "continue"}
                  </Button>
                ) : (
                  <Link to="/inquiries">
                    <Button
                      onClick={() => nextStep()}
                      style={{
                        backgroundColor: "#07A6A9",
                        color: "white",
                        padding: "16px 80px",
                        fontSize: "12px",
                        width: "100%",
                      }}
                    >
                      {step == 1 ? "Start Setup" : "continue"}
                    </Button>
                  </Link>
                )}

                {/* logos.............................. */}
                {step === 2 && (
                  <div className="d-flex justify-content-center aling-item-center mt-4 mb-1">
                    <div className="">
                      <img src={require("../assets/fb.svg").default} alt="" />
                    </div>
                    <div className="">
                      <img
                        src={require("../assets/google.svg").default}
                        alt=""
                      />
                    </div>
                  </div>
                )}

                {/* loginbutton .....................*/}

                {step === 1 && (
                  <div className="text-center">
                    {" "}
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
                  </div>
                )}
                {step === 8 && (
                  <div className="mt-2">
                    <Button
                      style={{
                        backgroundColor: "white",
                        color: "#07A6A9",
                        padding: "16px 80px",

                        fontSize: "15px",
                        width: "100%",
                        border: "0px",
                        paddingBottom: "0px",
                      }}
                    >
                      skip
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingeupStepForm;

const Step1 = () => {
  return (
    <>
      <h3 className="text-center">Set up your Patient profile</h3>

      <p className="text-center" style={{ fontSize: "10px" }}>
        In publishing and graphic design . lorem ipsum is placeholder text
        commonly <br /> to demonstrate the visual form of
      </p>
    </>
  );
};
const Step2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h3 className="text-center mb-2">About You </h3>
      <p className="text-center" style={{ fontSize: "10px" }}>
        Tell us more about yourself and you business
      </p>

      <div className="mb-5">
        <TextField
          className="my-2"
          id="outlined-basic"
          label=" Busniness name"
          name="Busniness name"
          variant="outlined"
          style={{ width: "100%" }}
        />

        <TextField
          className="my-2"
          id="outlined-basic"
          label=" Your name"
          name="your name"
          variant="outlined"
          style={{ width: "100%" }}
        />

        <TextField
          className="my-2"
          id="outlined-basic"
          label="  Busniness  email eddress"
          name=" Busniness  email eddress"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};
const Step3 = () => {
  return (
    <>
      <h3 className="text-center mb-2">Password </h3>

      <p className="text-center" style={{ fontSize: "10px" }}>
        {" "}
        Enter your password for business profile
      </p>
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
    </>
  );
};
const Step4 = () => {
  return (
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
  );
};
const Step5 = () => {
  return (
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
  );
};
const Step6 = () => {
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
    <div className="scroll-container">
      <div class="mb-3 d-grid gap-3 p-0 content">
        <h6 className="text-center">
          {" "}
          Let's set up the Procedures your clinic provides! We will add these
          one at a time. so let's add the first <br /> procedure here{" "}
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
            save
          </Button>
        </div>
      </div>
    </div>
  );
};

const Step7 = () => {
  return (
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
  );
};
const Step8 = () => {
  return (
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
          Add
        </Button>
      </div>
    </>
  );
};
const Step9 = () => {
  return (
    <>
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
      <div
        className=" mx-auto ms-40px translate-middle"
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          zIndex: "99",
          width: "27%",
        }}
      >
       
        <div class="input-group mb-3">
  
  <input style={{ backgroundColor: "#7E7D7B ", borderRadius: "9px", border: "1px solid #07A6A9",color:"white", opacity:"0.9"}} type="text" class="form-control" placeholder="Username" aria-label="Enter your address" aria-describedby="basic-addon1"/>
</div>
        
      </div>
    </>
  );
};
