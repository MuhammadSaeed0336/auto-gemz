import React from "react";
import "./NewCar.css";
import NewCarCard from "./NewCarCard";
import NewCarModal from "./CarModal";

const NewCar = () => {
  return (
    <>
      <div className="container-fluid" style={{ textAlign: "center", marginTop:"10vh" }}>
        <div className="row">
          <div className="col-12 bg-dark">
            <h1 className="text-light mt-3">FIND NEW CARS</h1>
            <small className="text-light">
              Find information about the new cars in market
            </small>
            <div className="container mt-4">
              <div className="row">
                <div className="col-12 bg-light">
                  <div>
                    <h1>
                      <NewCarModal />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <NewCarCard />
        </div>
      </div>
    </>
  );
};

export default NewCar;
