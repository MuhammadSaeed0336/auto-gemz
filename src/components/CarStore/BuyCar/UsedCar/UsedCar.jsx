import React from "react";
import DropDown from "./DropDown/DropDown";
import "./UsedCar.css";
import UsedCarCard from "./UsedCarCard";

const UsedCar = () => {
  return (
    <>
      <div className="main" style={{ marginTop: "10vh" }}>
        <div className="row ">
          <div
            className="col-lg-12 col-md-12 col-sm-12 bg-dark text-light pb-3"
            style={{ textAlign: "center" }}
          >
            <h2 className="mt-3">BUY USED CARS</h2>
            <small>Here is a list of used cars for sale in Pakistan</small>
          </div>
          <div
            className="sidebar col-lg-3 col-md-3 col-sm-3 bg-dark text-light"
            style={{ width: "22%" }}
          >
            <div className="container mb-4 mt-4 " id="sideMenu">
              <DropDown />
            </div>
          </div>
          <div className="col-lg-9 mt-4">
            <UsedCarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsedCar;
