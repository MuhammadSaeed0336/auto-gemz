import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

const RentCarCard = () => {
  return (
    <>
      <div className="row">
        <>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <Card
              id="card"
              className="my-2"
              inverse
              style={{
                width: "18rem",
                textAlign: "center",
              }}
            >
              <CardBody>
                <CardTitle className="mb-2" tag="h5">
                  Ford Mache
                </CardTitle>
                <img
                  className="mt-1"
                  id="cardImage"
                  src="https://images.unsplash.com/photo-1612468008274-9445bd56161e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
                  alt=""
                />
                <div className="row">
                  <div className="col-12">
                    <small>Rent ___ Rs per Day</small>
                  </div>
                  <NavLink to={"/rentCar/rentACar/rentCarDetails"}>
                    <Button className="btn-light mt-3">View Details</Button>
                  </NavLink>
                </div>
              </CardBody>
            </Card>
          </div>
        </>
      </div>
    </>
  );
};

export default RentCarCard;
