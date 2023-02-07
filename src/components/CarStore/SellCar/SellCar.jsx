import React from "react";
import data from "./SellCarData";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  List,
} from "reactstrap";
import { Link } from "react-router-dom";

const SellCar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((dat) => {
            return (
              <>
                <div
                  className="col-lg-4 col-sm-12 col-md-6"
                  style={{ textAlign: "center" }}
                >
                  <Card
                    className="my-2"
                    color="dark"
                    inverse
                    style={{
                      width: "23rem",
                    }}
                  >
                    <CardHeader style={{ paddingTop: "1.5rem" }}>
                      <CardTitle tag="h5">{dat.title}</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <span
                        style={{
                          border: "1px solid white",
                          borderRadius: "50%",
                          padding: "0.6rem",
                        }}
                      >
                        <dat.icon />
                      </span>
                      <CardText
                        className="container"
                        style={{ fontSize: "14px" }}
                      >
                        <List style={{ marginTop: "1rem" }}>
                          <li>{dat.description.one}</li>
                          <li>{dat.description.two}</li>
                          <li>{dat.description.three}</li>
                        </List>
                        <small>{dat.info}</small>
                      </CardText>
                      <Link to={"/sellCar/postAdd"}>
                        <Button
                          className="btn btn-gray"
                          style={{ fontSize: "14px" }}
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
