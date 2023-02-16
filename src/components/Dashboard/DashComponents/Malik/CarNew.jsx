import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const CarNew = () => {
  return (
    <>
      <div
        className="main"
        style={{
          height: "85vh",
          marginTop: "15vh",
          width: "72vw",
          marginLeft: "25vw",
        }}
      >
        <div className="container">
          <h5 style={{ color: "white" }}>
            <div className="row">
              <div className="col-12">
                Here are the cars that are currently avilable for sale in Auto
                Gemz
              </div>
              <div className="col-12 mt-3">
                <div className="container card p-2 text-dark">
                  <div className="row gap-1 " style={{ textAlign: "center" }}>
                    <div className="col-1">
                      <img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Loading"
                        style={{
                          height: "5rem",
                          width: "5rem",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="col-3 mt-2">
                      <h4>Make Model</h4>
                      <h5>Year</h5>
                    </div>
                    <div className="col-2 mt-3">
                      <h4>Transmission</h4>
                    </div>
                    <div className="col-2 mt-3">
                      <h4>Fuel Type</h4>
                    </div>
                    <div className="col-2 mt-3">
                      <h4>PRICE</h4>
                    </div>
                    <div className="col-1 mt-3 " style={{ display: "flex" }}>
                      <NavLink to={"/dashboard/carsSale/details"}>
                        <Button className="btn-info text-light">
                          <InfoIcon />
                        </Button>
                      </NavLink>
                      <Button
                        className="btn-danger"
                        style={{ height: "2.5rem" }}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </h5>
        </div>
      </div>
    </>
  );
};

export default CarNew;
