import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Avatar, Container, Grid, Paper, Rating, TextField } from "@mui/material";
import { Lock, MedicalServicesOutlined, Person } from "@mui/icons-material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link, useLocation } from "react-router-dom";
import { FaQuoteLeft } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

export const Home = () => {
  const captchaRef = useRef(null)
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [subCategories, setSubCategories] = useState([]);

  const categorySubcategoryMap = {
    'Aesthetic Procedures (Non-Surgical)': [
      'Botox and Fillers',
      'Chemical Peel',
      'Laser Hair Removal',
      'Microdermabrasion',
      'Intense Pulsed Light (IPL) Treatment',
      'Cellulite Laser and Cream Treatments',
    ],
    'Bariatric Surgery (Obesity Surgery)': [
      'Gastric Bypass',
      'Gastric Sleeve',
      'Stomach Balloon',
      'Stomach Band',
    ],
    Dentistry: [
      'Cosmetic Dentistry “Hollywood Smile”',
      'Dental Implants',
      'Crowns',
      'Veneers',
      'Teeth Whitening',
      'Orthodontics - Braces/Invisalign, Corrective Jaw Surgery',
      'Endodontics - Root Treatments',
      'Oral Surgery',
      'Prosthodontics - Full Mouth Reconstruction, Dental Crowns & Bridges, Dentures',
      'Periodontal - Gum Surgeries, Gum Cleaning, Gum Depigmentation',
      'General dentistry - Fillings, Cleanings',
      'Implantology - Dental Implants',
    ],
    'Fertility & IVF': [
      'Invitro Fertilization IVF/ICSI',
      'Egg (embryo) & Sperm Freezing',
      'Intrauterine Insemination (IUI)',
      'Other Fertility Procedures and Diagnosis',
    ],
    HairTransplants: ["Beard Transplant", "Hair Transplant for Men","Hair Transplant for Women"],

    'Plastic Surgery and Aesthetic Surgeries': [
      'Liposuction',
      'Breast Lift and Augmentation',
      'Abdominoplasty (Tummy Tuck)',
      'Rhinoplasty (Nose Job)',
      'Facelift',
      'Lips Aesthetic - Lip Operations',
      'Mommy Makeover (Labiaplasty, Vaginoplasty)',
      'Eye Lift',
      'Neck Lift',
      'Brow/Forehead Lift',
      'Otoplasty (Ear Pinning)',
      'Reconstructive (Other Surgery)',],






     " Ophthalmology (Eye Procedures and Surgeries)":[

     ],


    Orthopedics: [
      'All',
      'Spine Surgeries',
      'Sports Injuries',
      'Knee Surgeries',
      'Hip Surgeries',
      'Shoulder Surgeries',
      'Carpal Tunnel',
      'And More...',
    ],
  };
 

  
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    const subCategories = categorySubcategoryMap[selectedCategory] || [];
    // console.log(subCategories,"unsort")
subCategories.sort()
// console.log(sort,"sort")

    setSubCategories(subCategories.sort());
  };



const  Orthopedics= [
  'All',
  'Spine Surgeries',
  'Sports Injuries',
  'Knee Surgeries',
  'Hip Surgeries',
  'Shoulder Surgeries',
  'Carpal Tunnel',
  'And More...',
]


// console.log(Orthopedics.sort())

  const cardData = [
    {
      title: "Select the Procedure",
      description: "You Need",
      image: require("../assets/card-1.jpg"),
      step: "1",
    },
    {
      title: "Consult with medical providers",
      description: "until you find the right one for you",
      image: require("../assets/card-2.jpg"),
      step: "2",
    },
    {
      title: "Receive a package offer",
      description:
        "Procedure, transportation, hotel, visa, and more. Aceept. Travel, Become a better you.",
      image: require("../assets/card-3.jpg"),
      step: "3",
    },
    {
      title: "Extra time?",
      description: "Sightsee !",
      image: require("../assets/card-4.jpg"),
      step: "4",
    },
  ];

  const cardchatData = [
    {
      icon: < FaQuoteLeft style={{fontSize:"25px",color:"#3B4652"}}/>,
      name:"Abbas A",
      reviews: 5,
      defaultValue:" 5.00/5.00",
      name2:"Adam johens",
      title:
        "Inadequate information about medical tourism is the reason that some people avoid this option. If you are considering treatment abroad, you should make an informed decision based on research. Discuss your concerns with medical tourists who have already been abroad for a treatment.",
    },
    {
      icon: < FaQuoteLeft style={{fontSize:"25px",color:"#3B4652"}}/>,
      name2:"Adam johens",
      name:"Abbas A",
      reviews: 5,
      defaultValue: "5.00/5.00",
      title:
        "Inadequate information about medical tourism is the reason that some people avoid this option. If you are considering treatment abroad, you should make an informed decision based on research. Discuss your concerns with medical tourists who have already been abroad for a treatment.",
    },
    {
      icon: < FaQuoteLeft style={{fontSize:"25px",color:"#3B4652"}}/>,
      name2:"Adam johens",
      name:"Abbas A",
      reviews: 5,
      defaultValue:"5.00/5.00",
      title:
        "Inadequate information about medical tourism is the reason that some people avoid this option. If you are considering treatment abroad, you should make an informed decision based on research. Discuss your concerns with medical tourists who have already been abroad for a treatment.",
    },
  ];

  const card = [
    {
      icon: (
        <StarBorderIcon className="clr-grdn1"
          style={{
            width: "90px",
            height: "90px",
            color: "white",
            borderRadius: "10px",
            fontSize: "10px",
            padding: "14px",
          }}
        />
      ),
      name:"Fast and Secure Booking",

      title:
        "Our app provides an effiecent booking process and airtight security to ensure your medical journey is as smooth as possible.",
    },
    {
      icon: (
        <Person className="clr-grdn1"
          style={{
            width: "90px",
            height: "90px",
            color: "white",
            borderRadius: "10px",
            fontSize: "10px",
            padding: "14px",
          }}
        />
      ),
      name:"24/7 Online Support",
      title:
        "Our team is available around the clock to provide you with customer support and answer any questions you may have.",
    },
    {
      icon: (
        <Lock className="clr-grdn1"
          style={{
            width: "90px",
            height: "90px",
            color: "white",
            borderRadius: "10px",
            fontSize: "10px",
            padding: "14px",
          }}
        />
      ),
      name:"Customized Packages",
      title:
        "Our partnered medical providers offer personalized packages to meet your unique medical and logistical needs. Our app allows us to create customized packages tailored to your budget and preferences.",
    },
  ];

  const cardketData = [
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
  ];

  const str = 'usman'

  const defaultValue =0;
  const valueLabelFormat = (value) => {
    if (value === 20000) {
      return 'No max'; // Custom text for 20000
    }
    return value; // Default behavior for other values
  };

  const marks = [
    {
      value: 0,
     
    },
    {
      value: 1000,
     
    },
    {
      value: 3000,
     
    },
    {
      value: 5000,
     
    },
    {
      value: 10000,
     
    },
    {
      value: 15000,
     
    },
    {
      value: 20000,
     
    },
   
  ];
  return (
    <div className="zoom-6">
      <div className="home_background_img">
        <div className="h-100  ">
          <div className="row gx-0 zoom_not5">
            <div
              className="col-sm-12 col-md-4 d-flex justify-content-md-end justify-content-center mt-md-5 mb-md-5  mt-0"
             
            >
              <div className="col-sm-12 col-md-7 bg-light rounded px-4 py-4 "  style={{  minHeight: "300px",width:"100%" }}>
                <h5 className="text-dark text-center fw-bold">
                Book Your Medical Procedure
                </h5>
                <p className="text-center" style={{fontSize:"12px"}}>Find the top providers in Turkey</p>

                <div className="mb-3">
                  <select id="category" onChange={handleCategoryChange} value={selectedCategory}
                    class="form-select bg-select "
                    aria-label="Default select example"
                  >
                    <option selected>Choose Category</option>
                    <option value="Aesthetic Procedures (Non-Surgical)">Aesthetic Procedures (Non-Surgical)     </option>
                    <option value="Bariatric Surgery (Obesity Surgery)"> Bariatric Surgery (Obesity Surgery) </option>
                    <option value="Dentistry">Dentistry   </option>
                    <option value="Fertility & IVF">Fertility & IVF </option>
                    <option value="Hair Transplants/ Hair Plugs">Hair Transplants/ Hair Plugs </option>
                    <option value="Ophthalmology (Eye Procedures and Surgeries)">Ophthalmology (Eye Procedures and Surgeries)</option>
                    <option value="Orthopedics"> Orthopedics </option>
                    <option value="Plastic Surgery and Aesthetic Surgeries">Plastic Surgery and Aesthetic Surgeries </option>

                   
                  </select>
                </div>

                <div className="mb-3">
                  <select id="subCategory" disabled={subCategories.length === 0}
                    class="form-select  bg-select"
                    aria-label="Default select example"
                  >
                    <option selected>Choose Sub Category</option>
                    {subCategories.map((subCategory) => (
          <option key={subCategory} value={subCategory}>
            {subCategory}
          </option>
        ))}
                  </select>
                </div>

                <div>
                  <select
                    class="form-select bg-select"
                    aria-label="Default select example"
                  >
                    <option selected>Any Location</option>
                    <option value="1">-Istanbul</option>
                    <option value="2">-Izmir</option>
                    <option value="3">-Antalya</option>
                    <option value="4">-Bursa</option>
                    <option value="5">-Mugla (Fethiye, Marmaris, Bodrum)</option>
                  </select>
                </div>

                <h5 className="py-4">Your Budget</h5>
                <p>Select min and max price range</p>

                <Box className="">
                <Slider className="zoom_not1"
                    sx={{ color: "#07A6A9",height:"10px" }}
                    aria-label="Temperature"
                    defaultValue={3000} // Set your initial value here
                    valueLabelDisplay={12}
                    step={null}
                    valueLabelFormat={valueLabelFormat}
                    marks={marks}
                    min={0}
                    max={20000}
                  />
                </Box>

                <div className="pt-5">
                  <Link to={"/heath-journey"}>
                    <button className="btn clr-grdn w-100 py-3 rounded-pill">
                      Start Your Health Journey
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-8  h-100 mt-5 ">
              <div className="col-lg-9">
                <div className="p-4">

                <h1 className=" heading" style={{ color: "white",fontSize:"50px" }}>
                Discover Medical Tourism with HealthHop
                </h1>
                <p className="text-white pe-lg-5 " style={{color:"#8699A3",fontWeight:"lighter",opacity:"0.7"}}>
                HealthHop was founded in San Francisco, CA. Our mission is to make medical tourism more safe and accessible than ever. We only work with the best medical practitioners and hospitals in the area, so that you are in good hands
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple section  */}
      <div className="container ">
        <div className="row d-flex flex-column">

      <section className="py-5 order-2 order-md-1 ">
        <div className="d-flex justify-content-center  py-5  mb-3">
          <h3 className="heading mb-3 mt-1 "
            style={{
              borderBottom: "2px solid #07A6A9",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            It's Simple
          </h3>
        </div>

        <Box className="">
          <Container>
            <Box className=" d-flex justify-content-center">
              <Grid
                container
                className=" d-flex justify-content-center"
                md={8}
                xs={12}
              >
                <Grid
                  className=" d-flex justify-content-center"
                  container
                  spacing={3}
                >
                  {cardData.map((card, index) => (
                    <Grid className="mx-auto mt-3"
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      sx={{ position: "relative"}}
                    >
                      <Card className="" sx={{height: 370 }}>
                        <CardMedia
                          component="img"
                          alt={card.title}
                          height="240"
                          image={card.image}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ color: "#07A6A9" }}
                          >
                            {card.title}
                          </Typography>
                          <Typography   color="text.secondary" style={{fontSize:"17px"}}>
                            {card.description}
                          </Typography>
                        </CardContent>
                      </Card>
                      <div
                        className="d-flex btn-green justify-content-center align-items-center text-white px-2 py-2 white_space translate-middle"
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          backgroundColor: "#07A6A9",
                          position: "absolute",
                          top: "20px",
                          zIndex: "2000",
                          left: "50%",
                          fontSize: "11px",

                        }}
                      >
                        Step {card.step}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </section>

      <section className="order-3 order-md-2">
        <div className=" d-flex justify-content-center my-5  ">
          <h3 className="text-center heading "
            style={{
              borderBottom: "2px solid #07A6A9",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Access to World Class Medical Providers
          </h3>
        </div>
        <div className="">
          <div className="">
            <div className="p-3" style={{background: "linear-gradient(90deg, #757BBB, #0CA5A8)"}}>
              <div
                className=" row px-md-5 mx-md-5  py-4   "
                // style={{ paddingBottom: "10px", paddingTop: "100px" }}
              >
                <div className=" col-md-4 my-auto" >
                  <div className="d-flex justify-content-end ">  <h2 className="pe-md-5 me-md-5 " style={{ color: "white"}}>
                    Get the
                    Best 
                    Medical <br />
                    Care  for
                    Your Needs
                  </h2></div>
                
                </div>
                <div className="my-auto col-md-8">
                  <p className="" style={{ color: "#FFFFFF",fontSize:"20px", opacity:'1' }}>
                   HealthHop is a centralized, all-in-one medical tourism application that allows you to book your medical procedures, transportation, and accommodation logistics in another city, country or overseas. Our app is easy to use and provides a personalized experience to make your medical journey as stress-free as possible. Download the app today and start exploring your options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5  order-1 order-md-3">
        <div className="d-flex justify-content-center  py-3">
          <h2 className="heading  pt-5"
            style={{
              borderBottom: "2px solid #07A6A9",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Top Specialties
          </h2>
        </div>

        <Box>
          <Container>
            <Grid
              className="mx-auto"
              container
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {cardketData.map((e, index) => (
                <Grid className="p-2" item key={index}>
                  <div
                    className="ket mx-auto"
                    style={{
                      backgroundColor: "#F9F9F9",
                      height: "150px",
                      width: "140px",
                      borderRadius: "10px",
                      color: "#939393",
                    }}
                  >
                    <div className="text-center  pt-4">
                      <div className="pb-5">{e.icon}</div>

                      <p className="mb-0 pb-4" style={{ fontSize: "15px" }}>
                        {e.title}
                      </p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <p className="text-center mt-4 decoration-none">
          <Link className="decoration-none" style={{ color: "#6C6C6C" }}>
            {`see more >>`}
          </Link>
        </p>
      </section>
      </div>
      </div>

      <section className="   ">
        <div className="d-flex justify-content-center  py-3">
          <h2 className="heading"
            style={{
              borderBottom: "2px solid #07A6A9",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            What Our Users Say
          </h2>
        </div>
        <div
          className="text-center"
          style={{ color: "#939393", fontSize: "11px" }}
        >
          <p className="mb-5 fw-bold" style={{fontSize:"15px"}} >
          We collect reviews from our users so you can get an honest opinion of <br /> what an experience with our website are really like!
          </p>
        </div>

        <Box>
          <Container>
            <Grid
              className=" mx-auto w-100 d-flex justify-content-center"
              container
              spacing={3}
              alignItems={"center"}
            >
              {cardchatData.map((e, index) => (
                <Grid className="mx-1 p-0" item key={index}>
                  <div
                    className="chat my-4"
                    style={{
                      backgroundColor: "#F9F9F9",

                      maxWidth: "370px",
                      borderRadius: "10px",
                      color: "#939393",
                    }}
                  >
                    <div>

                  
                    <div className="  d-flex   p-4 pb-0">
                      <div className="px-2  card-content">

                       
                        {e.icon}
                      
                      
                      </div>
                       <div className="">
                        <div className="d-flex aling-items-center  card-content justify-content-between mb-1">
                       <h5 className="my-auto" style={{color:"black"}}>{e.name}</h5>
                        <div className="" style={{width:"3rem"}}>
                          <img src={require("../assets/Flag_of_Turkey.png")} width={"100%"} alt="" />
                        </div>

                        </div>

                      <p
                        className="mb-0  card-content p-3 py-3   ps-0 pt-0 pb-0"
                        style={{ fontSize: "18px" }}
                      >


                        {e.title}
                      </p>

                            <div className='d-flex  align-items-center gap-2'>
                            <Rating className='mb-0' name="size-medium" defaultValue = {defaultValue} /> 
                            <span className='' style={{fontSize:"12px"}}>  
                            {e.defaultValue}  </span>
                            </div>
                       </div>
                      

                    </div>
                       <div className="text-center fw-bold pt-5 pb-2" style={{fontSize:"15px"}}>
                        <div>

                        <p className="mb-0">This patient was treated for 
                        </p>
                      <p className="color">  Hair Transplant  </p> 
                        </div>
                       

                       </div>
                       </div>
                  </div>
                       
                  <div className="text-center">
                    <Avatar style={{width:"100px",height:"100px"}}
                      className="mx-auto mt-4"
                      alt="Travis Howard"
                      src={require("../assets/Ellipse 1.png")}
                    />
                    <h6 className="mt-3">{e.name2}</h6>
                  </div>
                  
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        
      </section>

      <section className="">
        <div className=" ">
          <div className="bg1 ">
            <div className="mx-auto" style={{width:"85%"}}>

            <div className="pt-5 mx-auto d-flex justify-content-center  " >
                  <Link to={""} className="mx-auto">
                    <button className="btn clr-grdn  py-3 mx-auto fs-4">
                    Search Medical Providers
                    </button>
                  </Link>
                </div>

            <div className="d-flex justify-content-center mt-lg-3  pt-lg-3 ">
          
              <h2 className="heading  "
                style={{
                  borderBottom: "2px solid #07A6A9",
                  display: "inline-block",
                  paddingBottom: "7px",
                }}
              >
               <span className="fw-light"> How  </span> HealthHop Works
              </h2>
            </div>
            <div
              className="text-center fw-bold"
              style={{ color: "#939393", fontSize: "18px" }}
            >
              <p>
              HealthHop is a centralized medical tourism hub that allows you to book safe, secure medical treatment and travel 
                <br />logistics overseas from licensed, internationally recognized medical providers.
              </p>
              <p></p>
            </div>

            <div className=" my-5  me-md-0 ">
              <div className=" d-md-flex p-lg-5 mx-lg-5 ">
                <div className="col-md-7  p-0 mt-5 pt-5 ">
                   <div className="mt-1">

                   
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center " style={{ color: "white" }}>
                      01
                    </h4>
                  </div>
                  <h2>Book Your Procedure</h2>
                  <p className="" style={{ fontSize: "18px", }}>
                  Simply browse our selection of medical providers and services and book a consultation with the one that best meets your needs. Our app provides detailed information on each procedure to help you make an informed decision.
                  </p>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="mx-auto d-flex justify-content-center  " style={{width:"15rem"}}>
                    <img  style={{objectFit:"contain"}}
                      className="mx-auto img-fluid"
                      src={require("../../src/assets/Image 4.png")}
                      alt="Card image"
                    
                    />
                  </div>
                </div>
              </div>
              <div className=" d-md-flex flex-row-reverse p-xl-5 mx-xl-5">

              <div className="col-md-7 p-0 ">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center " style={{ color: "white" }}>
                      02
                    </h4>
                  </div>
                  <h2>Transportation & Accommodation</h2>
                  <p className="" style={{ fontSize: "18px" }}>
                  Once you have booked your procedure, our providers can even help you take care of your transportation and accommodation logistics. Need to be picked up from the airport? No problem. Transportation from your hotel and clinic can be arranged with ease.
                  </p>
                </div>
                <div className="col-md-5 pe-md-5 d-flex align-items-center">
                  <div className="m-auto">
                    <img
                      className="mx-auto"
                      src={require("../../src/assets/Image 5.png")}
                      alt="Card image"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>


              </div>
              <div className=" d-md-flex p-md-5 mx-md-5">
                <div className="col-md-7 mt-5 pt-5">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center " style={{ color: "white" }}>
                      03
                    </h4>
                  </div>
                  <h2>Travel!</h2>
                  <p className="" style={{ fontSize: "18px" }}>
                  Once you have selected your procedure and provider, a package will be offered to you. This could include procedure, accomodation, pickup logistics and more. Once you accept and pay through our secure online portal, you are ready to travel!
                  </p>
                </div>

                <div className="col-lg-5">
                  <div className="mx-auto d-flex justify-content-center  " style={{width:"15rem"}}>
                    <img 
                      className="mx-auto img-fluid"
                      src={require("../../src/assets/Image 4.png")}
                      alt="Card image"
                    
                    />
                  </div>
                </div>
              </div>
              <div className=" d-md-flex flex-row-reverse p-xl-5 mx-xl-5">


                <div className="col-md-7 my-5 ">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center  " style={{ color: "white" }}>
                      04
                    </h4>
                  </div>
                  <h2> Sightsee!</h2>
                  <p className="" style={{ fontSize: "18px" }}>
                  Have extra time before or after your medical procedure and want to sightsee? Our team can help you plan activities or give you recommendations on places to see, the local cuisine, and more!
                  </p>
                </div>

                <div className="col-md-5 pe-md-5 d-flex align-items-center">
                  <div className="m-auto">
                    <img
                      className="m-auto"
                      src={require("../../src/assets/Image 5.png")}
                      alt="Card image"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2  x mb-5 " >
      <div className="pt-5 mx-auto d-flex justify-content-center  " >
                  <Link to={""} className="mx-auto">
                    <button className="btn clr-grdn  py-3 mx-auto fs-4">
                    Search Medical Providers
                    </button>
                  </Link>
                </div>
        <div className="d-flex justify-content-center  py-3">
          

          <h2 className="heading"
            style={{
              borderBottom: "2px solid #07A6A9",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Features
          </h2>
        </div>

        <Box>
          <div className="mb-2">
            <Grid 
              className=" d-flex flex-sm-row flex-column"
              container
              alignItems={"center"}
              justifyContent={"center"}
            >
              {card.map((e, index) => (
                <Grid 
                  component={Paper}  elevation={5}
                  className=" rounded-4 my-2 p-0 d-flex mx-2 justify-content-center "
                  item
                  key={index}
                >
                  <div
                    className=" my-2 "
                    style={{
                      borderRadius: "10px",
                      color: "#939393",
                      maxWidth: "300px",
                      height: "290px",
                    }}
                  >
                    <div className="    ">
                      <div className=" px-4 mb-2 ">{e.icon}</div>
                      <h6
                        className="mb-0  px-4 pt-2 "
                        style={{ color: "black" }}
                      >
                       {e.name}
                      </h6>
                      <p
                        className="mb-0  card-content px-4 pb-2  "
                        style={{ fontSize: "16px" }}
                      >
                        {e.title}
                      </p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </section>

      <section className="">
        <div className="">
            <div className="p-3 bg">
          <div className=" x">
              <div className="d-flex justify-content-center  pt-5 mt-2">
                <h2 className="heading"
                  style={{
                    borderBottom: "2px solid #07A6A9",
                    display: "inline-block",
                    paddingBottom: "7px",
                    color: "white",
                   
                  }}
                >
                  About HealthHop
                </h2>
              </div>

              <div
                className=" row px-md-5 mx-md-5 mb-4 pt-1 "
              
              >
                <div className="px-3  col-md-7  my-auto pb-5 " >
                


                 
                  <h2 className="px-3 text-white">
                    Our Mission
                  </h2>
                  <p className="px-3 text-white fs-5">
                  At HealthHop, we believe that everyone should have access to affordable and quality medical care. Our mission is to make safe and affordable medical care accessible to anyone by providing a centralized, all-in-one application that streamlines the booking process.
                  </p>
                  <p className="px-3 mb-5 text-white fs-5">
                  At HealthHop, we believe that everyone should have access to affordable and quality medical care. Our mission is to make safe and affordable medical care accessible to anyone by providing a centralized, all-in-one application that streamlines the booking process.
                  </p>
                  
                </div>
                <div className=" col-md-5 my-auto " style={{height:"500px"}}>
                 
                    <img
                      src={require("../assets/md-3.png")}
                      width={"100%"}
                      height={"100%"}
                      alt=""
                    />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" " id="navigate">
        <div className="container-lg px-lg-0 px-sm-5">
          <div className="mx-md-5 ">
            <div className="p-3 ">
              <div className="d-flex justify-content-center  pb-4 ">
                <h1 className="heading"
                  style={{
                    borderBottom: "2px solid #07A6A9",
                    display: "inline-block",
                    paddingBottom: "7px",
                   
                   
                  }}
                >
                  Contact us
                </h1>
              </div>

              <Box
                component={Paper} elevation={5}
                className=" px-sm-5 mb-5 "
                style={{ paddingBottom: "20px", paddingTop: "50px" }}
              >
                <div className=" mx-3">
                  <div className=" d-sm-flex">
                    <div className="my-2 me-sm-1" style={{ width: "100%" }}>
                      <TextField
                        id="outlined-basic"
                        label="Frist Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="my-2 ms-sm-1" style={{ width: "100%" }}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="my-2" style={{ width: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="my-2" style={{ width: "100%" }}>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Message"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-5 zoom_not1">
                  {/* <Link to={"/learn-more"}> */}
                  <ReCAPTCHA className="zoom_not5" style={{overflow:"hidden"}}
    sitekey={process.env.REACT_APP_SITE_KEY}
    
  />
                      <Button
                      className="my-2 mt-2"
                      style={{
                        backgroundColor: "#07A6A9",
                        color: "white",
                        padding: "16px 80px",
                        fontSize: "10px",
                      }}
                    >
                     Submit
                    </Button>
                  {/* </Link> */}

                 
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
