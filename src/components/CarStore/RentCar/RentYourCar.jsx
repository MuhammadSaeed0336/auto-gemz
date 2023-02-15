import React from "react";
import "../BuyCar/UsedCar/UsedCar.css";
import RentCarCard from "./RentCarCard";

const RentYourCar = () => {
  return (
    <>
      <div className="main" style={{ marginTop: "10vh" }}>
        <div className="row ">
          <div
            className="col-lg-12 col-md-12 col-sm-12 bg-dark text-light pb-3"
            style={{ textAlign: "center" }}
          >
            <h2 className="mt-3">RENT A CAR</h2>
            <small>
              Here is a list of cars available for renting in Pakistan
            </small>
          </div>
          <div className="container">
            <RentCarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RentYourCar;
