import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Refund({ onHide, show }) {
  return (
    <form>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ zIndex: "10000" }}
      >
        <Modal.Header
          className=""
          closeButton
          style={{ backgroundColor: "#07A6A9", color: "white" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Message Refund
          </Modal.Title>
        </Modal.Header>
        <form>
          <Modal.Body>
            <>
              <h4 className="text-center">
                Tell us why you are requesting a refund?
              </h4>
              <div class="mb-3">
                <label htmlFor="">Message</label>
                <textarea
                  style={{ fontSize: "9px" }}
                  class="form-control"
                  placeholder="type message here..."
                  rows={3}
                ></textarea>
              </div>
            </>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" class="btn btn_green text-white">
              Send Request
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </form>
  );
}
const data = [{}, {}, {}, {}];
export const MyBooking = () => {
  const [refund, setRefund] = useState(false);
  return (
    <>
      <h4 className="my-3">My Bookings</h4>
      {refund && <Refund show={refund} onHide={() => setRefund(false)} />}

      {data.map((ele, index) => {
        return (
          <div key={index} className="container bg-white rounded-4 py-2 mt-2">
            <div className="d-flex align-items-center mt-2">
              <Avatar
                src={require("../assets/WhatsApp Image 2023-08-29 at 11.43.13 AM (1).png")}
                sx={{ width: "60px", height: "60px" }}
              />
              <h5 className="ms-3 my-auto"> Sunny Apartment</h5>
            </div>
            <div className="row mt-3">
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Medical Provider:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    Anadolo Medical Center
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Total Price:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    10,000 USD
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Deposit (30%):</p>
              </div>

              <div className="col-10 d-flex  gap-2 align-items-center  ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px mb-0 py-1">
                    30,000 USD
                  </p>
                </div>
                <div>
                    <button
                      onClick={() => setRefund(true)}
                      className="btn btn_green rounded-pill my-auto py-1"
                    >
                      Refund
                    </button>
                </div>
              </div>
              
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">
                  Remaining Balance Due On Day of procedure to Clinic:
                </p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    17,000 USD
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Procedure Name:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    Hair Transplant
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Details:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className=" fs_14px px-4">
                    Hair Transplant surgery is a procedure used to treat hair
                    loss. Various Techniques are available. But all hair
                    transplant involve taking hair-bearing Skin from one part to
                    the scalp and grafting these pieces of skin onto baid or
                    thining areas of scalp or areas of troma.
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Order Date:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    September 16, 2022
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Order Number:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    000000897557-2
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Scheduled Procedure Date:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    September 16 2022 at 12:45pm
                  </p>
                </div>
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Reciept:</p>
              </div>
              <div className="col-10 d-flex align-items-center ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    google.com.sdicinidnccm
                  </p>
                </div>
                
              </div>
              <div className="col-sm-2 text-sm-end">
                <p className="fs_14px fw-bold">Address:</p>
              </div>
              <div className="col-10 d-flex flex-column ">
                <div className="my-auto">
                  <p className="rounded rounded-pill w-fit px-2 fs_14px">
                    First floor Akbar plaza sialkot
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
