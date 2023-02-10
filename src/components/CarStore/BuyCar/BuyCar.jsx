import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";
import data from "./BuyCarData";
const BuyCar = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "11vh" }}>
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
                      width: "18rem",
                    }}
                  >
                    <CardHeader style={{ paddingTop: "1.5rem" }}>
                      <span
                        style={{
                          border: "1px solid white",
                          borderRadius: "50%",
                          padding: "0.6rem",
                        }}
                      >
                        <dat.icon />
                      </span>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h5">{dat.title}</CardTitle>
                      <CardText
                        className="container"
                        style={{ fontSize: "14px" }}
                      >
                        {dat.description}
                      </CardText>
                      <Link to={dat.path}>
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

export default BuyCar;
