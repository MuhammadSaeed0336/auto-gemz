import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "reactstrap";

const Test = () => {
  return (
    <>
      <div className="main bg-dark">
        <div className="container header">
          <ButtonGroup>
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
            <Link to={"/buyCar"}>
              <Button>Buy Car</Button>
            </Link>
            <Link to={"/rentCar"}>
              <Button>Rent Car</Button>
            </Link>
            <Link to={"/sellCar"}>
              <Button>Sell Car</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Test;
