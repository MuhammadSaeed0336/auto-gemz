import React from "react";
import data from "./SellCarData";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  List,
} from "reactstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SellCar = () => {
  return (
    <>
      <div
        className="container "
        style={{
          marginTop: "11vh",
          height: "89vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="row">
          {data.map((dat) => {
            return (
              <>
                <div
                  className="container col-lg-6"
                  style={{ textAlign: "center" }}
                >
                  <Card
                    color="dark"
                    inverse
                    style={{
                      width: "19rem",
                      boxShadow: "0px 0px 1rem 2px white",
                    }}
                  >
                    <CardHeader className="pt-3 pb-3">
                      <div
                        className="container d-flex justify-content-center gap-3"
                        style={{ alignItems: "center" }}
                      >
                        <span
                          style={{
                            border: "2px solid white",
                            height: "2.5rem",
                            width: "2.5rem",
                            borderRadius: "50%",
                            padding: "0.6rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center ",
                          }}
                        >
                          <dat.icon />
                        </span>
                        <CardTitle className="pt-2" tag="p">
                          {dat.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardBody className="bg-dark text-light">
                      <CardText style={{ fontSize: "14px" }}>
                        <List style={{ marginLeft: "-2rem" }}>
                          <li>{dat.description.one}</li>
                          <li>{dat.description.two}</li>
                          <li>{dat.description.three}</li>
                        </List>
                        <small>{dat.info}</small>
                      </CardText>
                      <Link to={"/sellCar/postAdd"}>
                        <Button
                          color="error"
                          size="small"
                          variant="outlined"
                          style={{
                            color: "white",
                            boxShadow: "0px 0px 6px grey",
                          }}
                        >
                          {dat.button}
                        </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SellCar;
