import { Chat } from "@mui/icons-material";
import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MyInquiries = () => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    {
      name: "Anadulo Medical Center 1",
      procedure: "Hair Transplant",
      description:
        "Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment. Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment",
      price: "$12000 USD - $35000",
      reviews: 5,
      defaultValue: 4,
    },
    {
      name: "Anadulo Medical Center 2",
      procedure: "Cosmetic Surgery",
      description:
        "Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment. Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment",
      price: "$8000 USD - $25000",
      reviews: 4,
      defaultValue: 3,
    },
    {
      name: "Anadulo Medical Center 3",
      procedure: "Dental Implants",
      description:
        "Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment. Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment",
      price: "$5000 USD - $15000",
      reviews: 3,
      defaultValue: 5,
    },
    {
      name: "Anadulo Medical Center 4",
      procedure: "LASIK Eye Surgery",
      description:
        "Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment. Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment",
      price: "$3000 USD - $8000",
      reviews: 5,
      defaultValue: 4,
    },
  ];

  const defaultValue = 4;
  return (
    <>
      <h4 className="my-3">My Inquiries</h4>
      <div
        className="container my-2  pt-2 shadows"
        style={{ borderRadius: "12px", paddingBottom: "90px" }}
      >
        <div className=" row   m-2 p-2 ">
          {
            <div className="col-md-12 " style={{ height: "auto" }}>
              {data.map((data, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-1 justify-content-between flex-column flex-md-row shadow rounded-4 p-2 mb-3"
                >
                  <div className="p-2">
                    <div style={{ width: "8rem" }}>
                      <img
                        className="img-fluid"
                        src={require("../assets/h-card.png")}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="">
                    <div>
                      <div className="d-flex align-items-center gap-2 flex-column flex-md-row">
                        <Link
                          to={"/inquirybusiness"}
                          state={{ data }}
                          style={{ textDecoration: "none" }}
                        >
                          <h5>{data.name}</h5>
                        </Link>

                        <Link>
                          <button className="btn_blue btn rounded-pill py-1 fs_10px">
                            {data.procedure}
                          </button>
                        </Link>
                      </div>

                      <p
                        className="fs_10px cu-color"
                        style={{ opacity: "0.5" }}
                      >
                        {data.description}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between flex-column flex-md-row">
                      <div>
                        <p className="fs_14px fw-bold mb-0">Averrage Price</p>
                        <p
                          className="fs_14px cu-color"
                          style={{ opacity: "0.5", fontSize: "8px" }}
                        >
                          ( {data.price} )
                        </p>

                        <div className="d-flex  align-items-center gap-2">
                          <Rating
                            className="mb-0"
                            name="size-medium"
                            defaultValue={defaultValue}
                          />
                          <span className="fw-bold">
                            ({data.defaultValue} reviews){" "}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div>
                          <Link to={"/patient-message"}>
                            <button
                              className="btn  colo text-white py-2 fs_10px"
                              style={{ backgroundColor: "#07A6A9" }}
                            >
                              Message Provider
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
};
