import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
// import "../../styles/dashboard.css";

const AllCarCard = (props) => {
  const { image, info, price, transmission, details, detailRoute } = props;
  return (
    <div
      className="container main bg-secondary"
      style={{ textAlign: "center", padding: "10px", borderRadius: "2rem" }}
    >
      <div className="row">
        <div className="col-2">
          <img
            src={image}
            alt="loading"
            style={{ height: "5rem", width: "5rem", borderRadius: "50%" }}
          />
        </div>
        <div className="col-2 mt-3">
          <h6>INFO</h6>
          <p>{info}</p>
        </div>
        <div className="col-2 mt-3">
          <h6>PRICE</h6>
          <p>{price}</p>
        </div>
        <div className="col-2 mt-3">
          <h6>TRANSMISSION</h6>
          <p>{transmission}</p>
        </div>
        <div className="col-2 mt-4">
          <NavLink to={detailRoute}>
            <Button className="btn-dark">{details}</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllCarCard;
