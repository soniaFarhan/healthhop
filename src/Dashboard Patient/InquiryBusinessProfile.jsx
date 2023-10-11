import { MedicalServicesOutlined } from "@mui/icons-material";
import { Avatar, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export const InquiryBusinessProfile = () => {
  const { state } = useLocation();
  useEffect(() => {
    setBusinessData(state.data);
  }, [state]);
  const [businessdata, setBusinessData] = useState([]);
  const data = [
    {
      name: "Dr.Herry",
      chat: "      Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img: (
        <img
          src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")}
          width={"100%"}
          height={"100%"}
          alt=""
          style={{ objectFit: "contain" }}
        />
      ),
    },
    {
      name: "Dr.Herry",
      chat: "        Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img: (
        <img
          src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")}
          width={"100%"}
          height={"100%"}
          alt=""
          style={{ objectFit: "contain" }}
        />
      ),
    },
    {
      name: "Dr.Herry",
      chat: "        Dr. Bego has also worked for multinational insurance companies in a global role leading health partnerships",
      img: (
        <img
          src={require("../assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.png")}
          width={"100%"}
          height={"100%"}
          alt=""
          style={{ objectFit: "contain" }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="">
        <div className="bp-img d-flex justify-content-center mt-3 align-items-center ">
          <h2 className="text-white">{businessdata.procedure}</h2>
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
                <Avatar
                  src={require("../assets/WhatsApp Image 2023-08-29 at 11.43.13 AM (1).png")}
                  sx={{ width: 137, height: 137 }}
                />
              </div>

              <div className="mb-auto ms-5">
                <h5>{businessdata.name}</h5>

                <p style={{ fontSize: "13px" }}>medicalporvider@gamil.com</p>
              </div>
              <p
                className=" ms-md-3 ms-5 "
                style={{ fontSize: "13px", marginTop: "32px" }}
              >
                +92838489093
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-md-0 my-3">
          <div className="col-lg-6 mb-3 ">
            <div
              className="me-md-2 h-100 shadows4 bg-white pt-3 ps-3 pe-5"
              style={{ borderRadius: "20px", paddingBottom: "100px" }}
            >
              <h5>Summary of your medical practice:</h5>

              <p className="cu-color" style={{ fontSize: "14px" }}>
                {businessdata.description}
              </p>
            </div>
          </div>
          <div className="col-lg-6  mb-3 ">
            <div className=" my-3 pb-3 ms-md-2 h-100">
              <p>Address of medical provider here</p>

              <div className="google-map-code y">
                <iframe
                  className="y"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin&disableDefaultUI=1"
                  width="100%"
                  frameborder="0"
                  style={{ border: "0", borderRadius: "20px" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="999"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mb-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-5 mt-md-0 my-3"
          style={{ borderRadius: "20px" }}
        >
          <h4> Details Description:</h4>

          <p className="pe-md-5 me-md-5 cu-color" style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi
            quibusdam voluptate voluptatibus suscipit dolores iste incidunt enim
            sunt pariatur ullam, modi similique quis rem nostrum inventore
            iusto. Repellendus facere odio libero explicabo, corporis sunt
            ducimus cumque labore quo impedit quibusdam placeat neque tempora
            quam, tenetur adipisci asperiores, beatae animi mollitia vitae nam
            rerum nulla dolorum. Officiis nihil, corrupti molestiae
            exercitationem quisquam excepturi repellendus, cupiditate officia
            delectus ipsum consequuntur. Atque iusto porro illo accusantium a,
            aperiam saepe sit aspernatur, temporibus iure distinctio. Tenetur
            maxime labore totam laborum obcaecati optio nulla soluta deleniti,
            consectetur sed, omnis distinctio accusantium harum molestias.
            Consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Consequatur accusamus, debitis nam perspiciatis impedit labore
            repudiandae tenetur? Quibusdam accusamus aut a. Recusandae aliquid
            perspiciatis rem ipsa eius at dolor cum.
          </p>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div
              className="d-flex flex-column h-100 my-3 me-md-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-5 mb-0"
              style={{ borderRadius: "20px" }}
            >
              <h5 style={{ fontSize: "18px" }}>
                Your Business Offers the Following Services:
              </h5>

              <p className="linke">
                <ul className="d-flex flex-column fs_14px cu-color">
                  <li>
                    <Link>485 Star Hotel Accommodation</Link>
                  </li>
                  <li>
                    <Link>3 Star Hotel Accommodation</Link>
                  </li>
                  <li>
                    <Link>Transportation To and From Airport/Clinic/Hotel</Link>
                  </li>
                  <li>
                    <Link>Visa Support</Link>
                  </li>
                  <li>
                    <Link>
                      Travel Health Insurance or Medical Tourism Health
                      Insurance
                    </Link>
                  </li>
                  <li>
                    <Link>Sightseeing Support Bookings</Link>
                  </li>
                  <li>
                    <Link>Other Language and Translation Support</Link>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-md-6 pt-md-0 pt-4">
            <div
              className="d-flex flex-column h-100 my-3 ms-md-2 shadows4 bg-white pt-3 ps-3 pb-5 pe-md-5 mb-0"
              style={{ borderRadius: "20px" }}
            >
              <h5 style={{ fontSize: "18px" }}>
                Your Business Offers Care in the Following Languages:
              </h5>

              <p className="pe-md-5 me-md-5 linke">
                <ul className="d-flex flex-column">
                  <li>
                    <Link>Spanish</Link>
                  </li>
                  <li>
                    <Link>Turkish</Link>
                  </li>
                  <li>
                    <Link>Arabic</Link>
                  </li>
                  <li>
                    <Link>Urdu</Link>
                  </li>
                  <li>
                    <Link>Hindi</Link>
                  </li>
                  <li>
                    <Link>Persian</Link>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="ms-2 mt-3 fw-bold">Procedures:</h4>
          <div
            className="mt-3 shadows4 bg-white pt-3 ps-3 pb-5 pe-5"
            style={{ borderRadius: "20px" }}
          >
            <h6 className="fw-bold">Hair Transplant</h6>

            <h6 className="fw-semibold" style={{ color: "rgb(7,166,169)" }}>
              Sub-category name
            </h6>
            <div className="pe-md-5 me-md-5" style={{ fontSize: "14px" }}>
              <p className="cu-color fs_14px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                quasi doloremque dolorum non magnam. Exercitationem,
                voluptatibus accusamus, itaque animi voluptatem consequatur esse
                illo illum molestias neque aspernatur, quas tempore autem.
              </p>
              <div className="d-flex me-auto">
                <div className="me-2">
                  <div className="d-flex" style={{ color: "rgb(7,166,169)" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-1-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Average price range for the procedure:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 to 1000 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-2-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      All inclusive price range:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 to 1000 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-3-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Instant booking fixed price for procedure only:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-1-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Instant booking fixed price for All-inclusive:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 USA
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap aling-items-center ">
                <div className="">
                  <img
                    src={require("../assets/blog-card-1.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-2.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-3.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-4.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-5.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
            <h6 className="fw-bold">Hair Transplant</h6>

            <h6 className="fw-semibold" style={{ color: "#07A6A9" }}>
              Sub-category name
            </h6>
            <div className="pe-md-5 me-md-5" style={{ fontSize: "14px" }}>
              <p className="cu-color fs_14px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                quasi doloremque dolorum non magnam. Exercitationem,
                voluptatibus accusamus, itaque animi voluptatem consequatur esse
                illo illum molestias neque aspernatur, quas tempore autem.
              </p>
              <div className="d-flex me-auto">
                <div className="me-2">
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-1-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Average price range for the procedure:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 to 1000 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-2-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      All inclusion price range:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 to 1000 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-3-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Istant booking fixed price for procedure only:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 USA
                    </p>
                  </div>
                  <div className="d-flex" style={{ color: "#07A6A9" }}>
                    <div className="me-2">
                      <i
                        class="bi bi-1-circle "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </div>
                    <p className="my-auto me-auto fw-semibold">
                      Istant booking fixed price for All-inclusive:
                    </p>
                    <p className="my-auto mx-3" style={{ color: "black" }}>
                      500 USA
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap aling-items-center">
                <div className="">
                  <img
                    src={require("../assets/blog-card-1.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-2.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-3.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-4.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src={require("../assets/blog-card-5.png")}
                    width={"100px"}
                    height={"100px"}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div
          className=" my-3 row   pt-2 "
          style={{ borderRadius: "12px", paddingBottom: "90px" }}
        >
          <div className="col-md-9 " style={{ height: "auto" }}>
            <h4 className="ms-1 fw-bold"> Medical Staff </h4>

            {data.map((e) => {
              return (
                <div
                  className="d-flex align-items-center   flex-column flex-md-row shadows4 bg-white rounded-4 p-2 mb-3"
                  style={{ borderRadius: "12px" }}
                >
                  <div className="p-1 me-2">
                    <div style={{ width: "8rem" }}>
                      <img
                        className="img-fluid"
                        src={require("../assets/h-card.png")}
                        alt=""
                      />
                    </div>
                  </div>

                  <div>
                    <div className="me-auto">
                      <h6> {e.name} </h6>

                      <div className="me-5  ">
                        <div className="" style={{ fontSize: "13px" }}>
                          <p style={{ opacity: "0.4" }}>
                            Hair transplant procedure
                          </p>
                        </div>

                        <div className="d-flex align-items-center gap-2 flex-column me-5 flex-md-row me-3">
                          <p style={{ fontSize: "12px" }}>{e.chat}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
