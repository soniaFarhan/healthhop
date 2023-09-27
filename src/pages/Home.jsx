import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Avatar, Container, Grid, Paper, Rating, TextField } from "@mui/material";
import { Lock, MedicalServicesOutlined, Person } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { FaQuoteLeft } from 'react-icons/fa';
export const Home = () => {
 
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
    {
      icon: < FaQuoteLeft style={{fontSize:"25px",color:"#3B4652"}}/>,
      name2:"Adam johens",
      name:"Abbas A",
      reviews: 5,
      defaultValue: "5.00/5.00",
      title:
        "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
    {
      icon: < FaQuoteLeft style={{fontSize:"25px",color:"#3B4652"}}/>,
      name2:"Adam johens",
      name:"Abbas A",
      reviews: 5,
      defaultValue:"5.00/5.00",
      title:
        "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
  ];

  const card = [
    {
      icon: (
        <MedicalServicesOutlined
          style={{
            backgroundColor: "#07A6A9",
            width: "70px",
            height: "70px",
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
        <Person
          style={{
            backgroundColor: "#07A6A9",
            width: "70px",
            height: "70px",
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
        <Lock
          style={{
            backgroundColor: "#07A6A9",
            width: "70px",
            height: "70px",
            color: "white",
            borderRadius: "10px",
            fontSize: "10px",
            padding: "14px",
          }}
        />
      ),
      name:"Customized Packages",
      title:
        "Our partnered medical providers offer personalized packages to meet your unique medical and  logistical needs. Our app allows us to create   customized packages tailored to your budget and preferences.",
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

  const defaultValue =5

  return (
    <div>
      <div className="home_background_img">
        <div className="h-100">
          <div className="row gx-0 ">
            <div
              className="col-lg-5 d-flex justify-content-center mt-5 mb-5"
             
            >
              <div className="col-md-7 bg-light rounded px-4 py-4"  style={{ maxWidth:" 400px", minHeight: "300px" }}>
                <h6 className="text-dark text-center fw-bold">
                  Book Your Medical Procedure
                </h6>
                <p className="text-center">Find the top providers in Turkey</p>

                <div className="mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chose Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chose Sub Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chose Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <h6 className="py-4">Your Budget</h6>
                <p>Select min and max price range</p>

                <Box  sx={{   }}>
                  <Slider className="card-width"
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                  />
                </Box>

                <div className="pt-5">
                  <Link to={"/heath-journey"}>
                    <button className="btn btn_green w-100 rounded-pill">
                      Start Your Health Journey
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-7  h-100 mt-5 ">
              <div className="col-lg-9">
                <div className="p-4">

                <h1 style={{ color: "white" }}>
                  Discover Medical Tourism <br />
                  with HealthHop
                </h1>
                <p className="text-white">
                  HealthHop was founded in San Francisco, CA. Our mission is to
                  make medical <br />
                  tourism more safe and accessible than ever. We only work with
                  the best medical <br />
                  practitioners and hospitals in the area, so that you are in
                  good hands
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple section  */}

      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h3
            style={{
              borderBottom: "2px solid green",
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
                    <Grid className="mx-auto"
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      sx={{ position: "relative"}}
                    >
                      <Card className="" sx={{minHeight: 300 }}>
                        <CardMedia
                          component="img"
                          alt={card.title}
                          height="140"
                          image={card.image}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ color: "#07A6A9" }}
                          >
                            {card.title}
                          </Typography>
                          <Typography variant="body" color="text.secondary">
                            {card.description}
                          </Typography>
                        </CardContent>
                      </Card>
                      <div
                        className="d-flex justify-content-center align-items-center text-white px-2 py-2 white_space"
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          backgroundColor: "#07A6A9",
                          position: "absolute",
                          top: "3px",
                          zIndex: "2000",
                          left: "150px",
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

      <section className="">
        <div className="d-flex justify-content-center  py-5">
          <h3 className="text-center"
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Access to World Class medical providers
          </h3>
        </div>
        <div className="container">
          <div className="mx-md-5">
            <div className="p-3 bg">
              <div
                className=" px-md-5 d-md-flex"
                style={{ paddingBottom: "140px", paddingTop: "50px" }}
              >
                <div className="me-5" style={{ width: "30%" }}>
                  <h3 style={{ color: "white" }}>
                    Get the <br />
                    Best <br />
                    Medical <br />
                    Care for <br />
                    Your Needs
                  </h3>
                </div>
                <div className="" style={{ width: "70%" }}>
                  <p style={{ color: "white" }}>
                    HealthHop is a centralized, all-in-one medical tourism
                    application that allows you to book your medical procedures,
                    transportation, and accommodation logistics in another city,
                    country or overseas. Our app is easy to use and provides a
                    personalized experience to make your medical journey as
                    stress-free as possible. Download the app today and start
                    exploring your options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
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
                <Grid className="" item key={index}>
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

                      <p className="mb-0 pb-4" style={{ fontSize: "12px" }}>
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
            {`see more >>`}{" "}
          </Link>
        </p>
      </section>
      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
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
          <p>
            We collect reviews from our usersso you can get an honest opinion of
            what{" "}
          </p>
          <p></p>
        </div>

        <Box>
          <Container>
            <Grid
              className=" mx-auto"
              container
              spacing={3}
              alignItems={"center"}
            >
              {cardchatData.map((e, index) => (
                <Grid className="mx-auto p-0" item key={index}>
                  <div
                    className="chat my-4"
                    style={{
                      backgroundColor: "#F9F9F9",

                      width: "300px",
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
                       <h6 className="my-auto" style={{color:"black"}}>{e.name}</h6>
                        <div className="" style={{width:"3rem"}}>
                          <img src={require("../assets/Flag_of_Turkey.png")} width={"100%"} alt="" />
                        </div>

                        </div>

                      <p
                        className="mb-0  card-content p-3 py-3   ps-0 pt-0 pb-0"
                        style={{ fontSize: "12px" }}
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
                       <div className="text-center fw-bold pt-3 pb-2" style={{fontSize:"12px"}}>
                        <div>

                        <p className="mb-0">This patiend was treated for 
                        </p>
                      <p className="color">  Hair Transplant  </p> 
                        </div>
                       

                       </div>
                       </div>
                  </div>
                       
                  <div className="text-center">
                    <Avatar style={{padding:"40px"}}
                      className="mx-auto mt-4"
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <h6>{e.name2}</h6>
                  </div>
                  
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        
      </section>

      <section className="mx-lg-5">
        <div className="mx-lg-5 ">
          <div className="bg1 ">
            <div className="d-flex justify-content-center mt-lg-5  pt-lg-5 ">
              <h2
                style={{
                  borderBottom: "2px solid green",
                  display: "inline-block",
                  paddingBottom: "7px",
                }}
              >
                How HealthHop Works
              </h2>
            </div>
            <div
              className="text-center"
              style={{ color: "#939393", fontSize: "11px" }}
            >
              <p>
                Health-Tourism.com is a medical tourism guide and a directory
                <br /> of medical centers,
              </p>
              <p></p>
            </div>

            <div className=" m-5">
              <div className=" d-md-flex p-lg-5 mx-lg-5">
                <div className="col-md-7 p-0">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center" style={{ color: "white" }}>
                      01
                    </h4>
                  </div>
                  <h2>Book Your Procedure</h2>
                  <p className="" style={{ fontSize: "12px" }}>
                    Simply browse our selection of medical providers and
                    services and book a consultation with the one that best
                    meets your needs. Our app provides detailed information on
                    each procedure to help you make an informed decision.
                  </p>
                </div>

                <div className="col-lg-5">
                  <div className="mx-auto d-flex justify-content-center m-sm-5 p-sm-5">
                    <img
                      className="mx-auto"
                      src={require("../../src/assets/Image 4.png")}
                      alt="Card image"
                      style={{ width: "150px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" d-md-flex flex-row-reverse p-xl-5 mx-xl-5">

              <div className="col-md-7 p-0">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center" style={{ color: "white" }}>
                      02
                    </h4>
                  </div>
                  <h2>Transportation & Accommodation</h2>
                  <p className="" style={{ fontSize: "12px" }}>
                    Once you have booked your procedure, our providers can even
                    help you take care of your transportation and accommodation
                    logistics. Need to be picked up from the airport? No
                    problem. Transportation from your hotel and clinic can be
                    arranged with ease.
                  </p>
                </div>
                <div className="col-md-5">
                  <div className="mx-auto d-flex justify-content-center m-md-0 p-md-0 m-sm-5 p-sm-5">
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
                <div className="col-md-7 p-0">
                  <div
                    className=""
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center" style={{ color: "white" }}>
                      03
                    </h4>
                  </div>
                  <h2>Travel!</h2>
                  <p className="" style={{ fontSize: "12px" }}>
                    Once you have selected your procedure and provider, a
                    package will be offered to you. This could include
                    procedure, accomodation, pickup logistics and more. Once you
                    accept and pay through our secure online portal, you are
                    ready to travell
                  </p>
                </div>

                <div className="col-md-5">
                  <div className="mx-auto d-flex justify-content-center">
                    <img
                      className="mx-auto"
                      src={require("../../src/assets/Image 4.png")}
                      alt="Card image"
                      style={{ width: "150px" }}
                    />
                  </div>
                </div>
              </div>
              <div className=" d-md-flex flex-row-reverse p-xl-5 mx-xl-5">


                <div className="col-md-7 p-0">
                  <div
                    className="mx-auto d-flex justify-content-center"
                    style={{
                      backgroundColor: "#07A6A9",
                      width: "50px",
                      borderRadius: "13px",
                    }}
                  >
                    <h4 className="p-2 text-center" style={{ color: "white" }}>
                      04
                    </h4>
                  </div>
                  <h2> Sightsee!</h2>
                  <p className="" style={{ fontSize: "12px" }}>
                    Have extra time before or after your medical procedure and
                    want to sightsee? Our team can help you plan activities or
                    give you recommendations on places to see, the local
                    cuisine, and more!
                  </p>
                </div>

                <div className="col-md-5">
                  <div className="mx-auto d-flex justify-content-center  m-md-0 p-md-0 m-sm-5 p-sm-5">
                    <img
                      className="mx-auto"
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
      </section>

      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Features
          </h2>
        </div>

        <Box>
          <Container>
            <Grid
              className=" mx-auto px-md-5"
              container
              spacing={3}
              alignItems={"center"}
            >
              {card.map((e, index) => (
                <Grid
                  component={Paper}
                  className="mx-auto my-5 p-0"
                  item
                  key={index}
                >
                  <div
                    className=" my-4"
                    style={{
                      borderRadius: "10px",
                      color: "#939393",
                      width: "300px",
                      height: "210px",
                    }}
                  >
                    <div className="    ">
                      <div className=" px-4 ">{e.icon}</div>
                      <h5
                        className="mb-0  px-4 pt-3 "
                        style={{ color: "black" }}
                      >
                       {e.name}
                      </h5>
                      <p
                        className="mb-0  card-content px-4 pb-5  "
                        style={{ fontSize: "12px" }}
                      >
                        {e.title}
                      </p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </section>

      <section className="">
        <div className="container">
          <div className="mx-md-5">
            <div className="p-3 bg">
              <div className="d-flex justify-content-center  py-5">
                <h3
                  style={{
                    borderBottom: "2px solid green",
                    display: "inline-block",
                    paddingBottom: "7px",
                    color: "white",
                  }}
                >
                  About HealthHop
                </h3>
              </div>

              <div
                className=" row px-md-5 "
                style={{ paddingBottom: "140px", paddingTop: "50px" }}
              >
                <div className="px-3  col-md-7 ">
                  <h4 className="px-3" style={{ color: "white" }}>
                    Our Mission
                  </h4>
                  <p className="px-3" style={{ color: "white" }}>
                    At HealthHop, we believe that everyone should have access to
                    affordable and quality medical care. Our mission is to make
                    safe and affordable medical care accessible to anyone by
                    providing a centralized, all-in-one application that
                    streamlines the booking process.
                  </p>
                  <p className="px-3" style={{ color: "white" }}>
                    At HealthHop, we believe that everyone should have access to
                    affordable and quality medical care. Our mission is to make
                    safe and affordable medical care accessible to anyone by
                    providing a centralized, all-in-one application that
                    streamlines the booking process.
                  </p>
                </div>
                <div className=" col-md-5 my-auto ">
                  <h3 style={{ color: "white" }}>
                    <img
                      src={require("../assets/md-3.png")}
                      width={"100%"}
                      alt=""
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="mx-md-5 ">
            <div className="p-3 ">
              <div className="d-flex justify-content-center  py-5">
                <h3
                  style={{
                    borderBottom: "2px solid green",
                    display: "inline-block",
                    paddingBottom: "7px",
                  }}
                >
                  Contact Us
                </h3>
              </div>

              <Box
                component={Paper}
                className=" px-md-5 mb-5 "
                style={{ paddingBottom: "20px", paddingTop: "50px" }}
              >
                <div className=" mx-3">
                  <div className=" d-md-flex">
                    <div className="my-2 me-md-1" style={{ width: "100%" }}>
                      <TextField
                        id="outlined-basic"
                        label="Frist Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="my-2 ms-md-1" style={{ width: "100%" }}>
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

                  <div className="pt-5">
{/* <Link to={"/learn-more"}> */}
<Button
                      style={{
                        backgroundColor: "#07A6A9",
                        color: "white",
                        padding: "16px 80px",
                        fontSize: "10px",
                      }}
                    >
                      Submmit
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
