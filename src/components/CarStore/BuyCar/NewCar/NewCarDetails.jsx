import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DetailsCarousel from "./DetailsCarousel";
import { details, footer } from "./NewCarData";
import CloseIcon from "@mui/icons-material/Close";

const NewCarDetails = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const closeBtn = (
    <Button className="btn-dark" onClick={toggle}>
      <CloseIcon />
    </Button>
  );
  return (
    <>
      <div className=" container main">
        <div>
          <Button color="secondary" size="sm" onClick={toggle}>
            DETAILS
          </Button>
          <Modal centered size="xl" isOpen={modal} toggle={toggle} {...args}>
            <ModalHeader
              close={closeBtn}
              toggle={toggle}
              className="bg-dark text-light"
              style={{ decorationColor: "white" }}
            >
              {details.map((deez) => {
                return (
                  <>
                    {deez.make} {deez.model} {deez.year}
                  </>
                );
              })}
            </ModalHeader>
            <ModalBody>
              {details.map((det) => {
                return (
                  <>
                    <div className="container">
                      <div className="row container">
                        <div className="col-5" style={{ marginTop: "4rem" }}>
                          <h6>SPECIFICATIONS</h6>
                          <hr />
                          <div className="row container-fluid">
                            <div className="col-6">
                              <ul
                                style={{
                                  listStyleType: "none",
                                  lineHeight: "2rem",
                                }}
                              >
                                <li>
                                  <em>Price</em>
                                </li>
                                <li>
                                  <em>Fuel Type</em>
                                </li>
                                <li>
                                  <em>Fuel Tank</em>
                                </li>
                                <li>
                                  <em>Mileage</em>
                                </li>
                                <li>
                                  <em>Transmission</em>
                                </li>
                                <li>
                                  <em>Horse Power</em>
                                </li>
                                <li>
                                  <em>Tyre Size</em>
                                </li>
                              </ul>
                            </div>
                            <div className="col-6">
                              <ul
                                style={{
                                  listStyleType: "none",
                                  lineHeight: "2rem",
                                  textAlign: "right",
                                }}
                              >
                                <li>
                                  <em>{det.price}</em>
                                </li>
                                <li>
                                  <em>{det.fueltype}</em>
                                </li>
                                <li>
                                  <em>{det.fuelTankCapacity}</em>
                                </li>
                                <li>
                                  <em>{det.mileage}</em>
                                </li>
                                <li>
                                  <em>{det.transmission}</em>
                                </li>
                                <li>
                                  <em>{det.horses}</em>
                                </li>
                                <li>
                                  <em>{det.tyreSize}</em>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-7 container">
                          <DetailsCarousel />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </ModalBody>
            <ModalFooter className="bg-dark">
              <table
                className="container"
                style={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "8px",
                }}
              >
                <tr>
                  {footer.map((foo) => {
                    return (
                      <>
                        <td>
                          <div className="container row" >
                            <div className=" container col-1">
                              <foo.icon
                                style={{
                                  fontSize: "3rem",
                                  borderRadius: "50%",
                                  padding: "0.6rem",
                                  height: "3.5rem",
                                  border: "1px solid white",
                                  width: "3.5rem",
                                  color: "white",
                                  borderLeft: "4px solid white",
                                  borderRight:"2px"
                                }}
                              />
                            </div>
                            <div className="col-9">
                              <div className="row" style={{fontSize:"small",marginTop:"8px"}}>
                                <div className="col-12 text-light">
                                  {foo.heading}
                                </div>
                                <div className="col-12 text-light">
                                  {foo.info}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </>
                    );
                  })}
                </tr>
              </table>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default NewCarDetails;
