import React from "react";
import AllCarCard from "./AllCarCard";

const CarNew = () => {
  return (
    <div
      className="container main"
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: "15vh",
        height: "85vh",
        width: "73vw",
        marginLeft: "19rem",
      }}
    >
      <div className="row">
        <div className="col-12">
          <AllCarCard
            image={`https://cc-prod.scene7.com/is/image/CCProdAuthor/car-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900`}
            info={"Works Fine"}
            price={"10000"}
            transmission={"Automatic"}
            details={"HEHE"}
            detailRoute={"/dashboard/carsNew/details"}
          />
        </div>
      </div>
    </div>
  );
};

export default CarNew;
