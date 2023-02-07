import React from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";
import usedCars from "./UsedCarsData";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const UsedCarCard = () => {
  const [state, setState] = useState()
  const [icon, setIcon] = useState(false);
  return (
    <>
      <div className="container-fluid main" style={{marginLeft:"1rem"}}>
        <div className="row">
          {usedCars.map((use) => {
            const {phone }=use
            return (
              <div
                className="col-12 mt-2 d-flex"
                style={{ border: "2px solid black" }}
              >
                <div className="col-3">
                  <img
                    src={use.image}
                    alt="loading"
                    style={{
                      backgroundColor: "white",
                      height: "7rem",
                      width: "12rem",
                      marginTop: "1.5rem",
                      marginBottom: "1rem",
                      border: "1px solid black",
                      marginLeft: "6px",
                    }}
                  />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-9 mt-3">
                      <small style={{ fontWeight: "bold", textAlign: "start" }}>
                        {use.make} {use.model} for Sale
                      </small>
                    </div>
                    <div className="col-3">
                      <Badge style={{ marginTop: "1rem", fontSize: "medium" }}>
                        ${use.price}
                      </Badge>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <small>{use.city}</small>
                    </div>
                    <div className="col-12">
                      <small style={{ wordSpacing: "1rem" }}>
                        {use.year} | {use.mileage} | {use.enginetype} |{" "}
                        {use.transmission}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <ButtonGroup className="mt-2">
                      <Button className="btn btn-dark">View Details</Button>
                      <Button
                        className="btn btn-dark"
                        onClick={() => {
                          setState(phone);
                        }}
                      >
                        {state === phone ? (
                          <Badge className="bg-success">{state}</Badge>
                        ) : (
                          "Contact"
                        )}
                      </Button>
                      <Button
                        className="btn btn-dark"
                        onClick={() => { icon === false ? setIcon(true) : setIcon(false)}}
                      >{icon===true ? (<FavoriteBorderIcon/>):(<FavoriteIcon/>)}
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsedCarCard;
