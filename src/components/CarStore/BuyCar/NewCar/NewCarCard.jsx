import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { data } from "./NewCarData";

const NewCarCard = () => {
  return (
    <>
      <div className="row">
        {data.map((dat) => {
          return (
            <>
              <div className="col-lg-3 col-sm-12 col-md-6">
                <Card
                  id="card"
                  className="my-2"
                  inverse
                  style={{
                    width: "18rem",
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5">
                      {dat.make} {dat.model}
                    </CardTitle>
                    <img id="cardImage" src={dat.image} alt="" />
                    <div className="row">
                      <div className="col-12">
                        <small>Starting at $ {dat.price}</small>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <NavLink
                        to={"/buyCar/newCar/newCarDetail"}
                      >
                        <Button className="btn-light">Details</Button>
                      </NavLink>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NewCarCard;
