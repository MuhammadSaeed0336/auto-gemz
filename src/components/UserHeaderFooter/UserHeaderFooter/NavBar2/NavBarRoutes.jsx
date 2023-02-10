import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./NavBar2.css";

const NavBarRoutes = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav nav-tgl" />
      <Navbar.Collapse id="basic-navbar-nav  ">
        <Nav className="justify-content-start bg-dark rounded ">
          <Nav.Link
            className="mx-3 fs-5 fw-bold store"
            style={{ color: "White" }}
            href="/buyCar"
          >
            BUY CARS
          </Nav.Link>
          <Nav.Link
            className="mx-2 fs-5 "
            style={{ color: "White" }}
            href="/home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="mx-2 fs-5 "
            style={{ color: "White" }}
            href="/sellCar"
          >
            Sell
          </Nav.Link>
          <Nav.Link
            className="mx-2 fs-5 "
            style={{ color: "White" }}
            href="/about"
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavBarRoutes;
