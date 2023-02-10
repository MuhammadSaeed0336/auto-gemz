import React, { useState } from "react";
import { Row, Col, Navbar } from "react-bootstrap";
// import NavBarLogin from './NavBarLogin';
// import NavBarRoutes from './NavBarRoutes';
import "./NavBar2.css";
import { BsGem } from "react-icons/bs";
import { NavDropdown, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom";
// import { Button, ButtonGroup } from "reactstrap";
import { NavLink } from "react-router-dom";

const NavBar2 = () => {
  let userNavImg =
    "https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=400";
  let userNavName = "UserName";
  const [login, setLogin] = useState(false);
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" className=" p-2 fixed-top">
        <Row className="align-content-center">
          <Col lg={4} md={4} className="routes" sm={4} xs={4}>
            {/* <NavBarRoutes /> */}
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav nav-tgl" />
              <Navbar.Collapse id="basic-navbar-nav  ">
                <Nav className="justify-content-start bg-dark rounded ">
                  <Nav.Link
                    as={NavLink}
                    className="mx-3 fs-5 fw-bold store"
                    style={{ color: "White" }}
                    to="/home"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="mx-2 fs-5 "
                    style={{ color: "White" }}
                    to="/buyCar"
                  >
                    Buy
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="mx-2 fs-5 "
                    style={{ color: "White" }}
                    to="/sellCar"
                  >
                    Sell
                  </Nav.Link>
                  <Nav.Link
                    as={NavLink}
                    className="mx-2 fs-5 "
                    style={{ color: "White" }}
                    to="/about"
                  >
                    About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </>
          </Col>

          <Col
            lg={4}
            md={4}
            className="d-flex justify-content-center Logo"
            sm={4}
            xs={4}
          >
            <Navbar.Brand className="nav-brand" href="#Store">
              <h2 className=" d-inline">Auto</h2>
              <BsGem className="mb-2" />
              <h2 className="d-inline text-danger">Gemz</h2>
            </Navbar.Brand>
          </Col>

          <Col
            lg={4}
            md={4}
            className="login d-flex justify-content-center"
            sm={4}
            xs={4}
          >
            {/* <NavBarLogin /> */}
            <>
              {login ? (
                <>
                  <div className="px-5" style={{ display: "flex" }}>
                    <img
                      className="userimg d-inline"
                      src={userNavImg}
                      alt="User"
                      style={{ float: "left", marginRight: "10px" }}
                    />

                    <div className="nameAndOptions">
                      <p
                        className="text-danger mb-0 d-inline fw-bold"
                        style={{ padding: "0.8 rem", fontSize: "0.8rem" }}
                      >
                        {userNavName}
                      </p>

                      <NavDropdown
                        title="options"
                        id="basic-nav-dropdown"
                        className="dropdown-menu-right"
                        style={{ color: "white", padding: 0, fontSize: "10px" }}
                      >
                        <NavDropdown.Item href="#Profile">
                          Notifications
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#Profile">
                          My Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#Settings">
                          Settings
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <Button
                            className="btn-danger"
                            onClick={() => {
                              setLogin(false);
                            }}
                          >
                            {" "}
                            Logout{" "}
                          </Button>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    className="btn btn-light p-0 m-1 d-inline"
                    style={{ width: "3.1em", height: "1.6em" }}
                    onClick={() => setLogin(true)}
                  >
                    {" "}
                    Login{" "}
                  </Button>
                  <Button
                    className="btn btn-danger p-0 m-1 d-inline"
                    style={{ width: "3.7em", height: "1.6em" }}
                  >
                    {" "}
                    Sign up{" "}
                  </Button>
                </>
              )}
            </>
          </Col>
        </Row>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar2;
