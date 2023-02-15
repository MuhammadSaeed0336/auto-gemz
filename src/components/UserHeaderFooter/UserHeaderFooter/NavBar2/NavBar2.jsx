import React, { useState } from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import "./NavBar2.css";
import { BsGem } from "react-icons/bs";
import { NavDropdown } from "react-bootstrap";
import { Button, ButtonGroup } from "@mui/material";
import { Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const NavBar2 = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  let userNavImg =
    "https://images.pexels.com/photos/11805196/pexels-photo-11805196.jpeg?auto=compress&cs=tinysrgb&w=400";
   const [login, setLogin] = useState(false);
  return (
    <div>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className=" p-2 fixed-top text-light"
      >
        <Row className="align-content-center">
          <Col
            lg={6}
            md={6}
            className="routes"
            sm={6}
            xs={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <NavBarRoutes /> */}
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav nav-tgl" />
              <Navbar.Collapse id="basic-navbar-nav ">
                <div
                  className="container gap-4"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Nav.Link id="menu" as={NavLink} className="mx-2" to="/">
                    HOME
                  </Nav.Link>
                  <div className="d-flex">
                    <Dropdown
                      isOpen={dropdownOpen}
                      toggle={toggle}
                      direction={direction}
                    >
                      <DropdownToggle
                        id="menu"
                        style={{
                          background: "transparent",
                          border: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        Cars
                      </DropdownToggle>
                      <DropdownMenu className="bg-secondary" {...args}>
                        <NavLink to={"/buyCar/newCar"}>
                          <DropdownItem id="dItem">New Cars</DropdownItem>
                        </NavLink>
                        <NavLink to={"/buyCar/usedCar"}>
                          <DropdownItem id="dItem">Used Cars</DropdownItem>
                        </NavLink>
                        <NavLink to={"/sellCar"}>
                          <DropdownItem id="dItem">Sell Car</DropdownItem>
                        </NavLink>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Nav.Link
                    id="menu"
                    as={NavLink}
                    className="mx-2"
                    to="/sellCar"
                  >
                    SELL
                  </Nav.Link>
                  <div className="d-flex">
                    <Dropdown
                      isOpen={dropdownOpen1}
                      toggle={toggle1}
                      direction={direction}
                    >
                      <DropdownToggle
                        id="menu"
                        style={{
                          background: "transparent",
                          border: "0",
                          textTransform: "uppercase",
                        }}
                      >
                        Rent
                      </DropdownToggle>
                      <DropdownMenu className="bg-secondary" {...args}>
                        <NavLink to={"/rentCar/rentACar"}>
                          <DropdownItem id="dItem">Rent a Car</DropdownItem>
                        </NavLink>
                        <NavLink to={"/rentCar/rentOut"}>
                          <DropdownItem id="dItem">Rent Out</DropdownItem>
                        </NavLink>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Nav.Link id="menu" as={NavLink} className="mx-2" to="/about">
                    ABOUT
                  </Nav.Link>
                </div>
              </Navbar.Collapse>
            </>
          </Col>

          <Col
            lg={3}
            md={3}
            className="d-flex justify-content-center Logo"
            sm={3}
            xs={3}
          >
            <Navbar.Brand
              as={NavLink}
              className="nav-brand"
              to="/"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2 className=" d-inline" style={{ color: "Grey" }}>
                Auto
              </h2>
              <BsGem className="mb-2 m-1" style={{ color: "white" }} />
              <h2 className="d-inline" style={{ color: "red" }}>
                Gemz
              </h2>
            </Navbar.Brand>
          </Col>

          <Col
            lg={3}
            md={3}
            className="login d-flex justify-content-center"
            sm={3}
            xs={3}
          >
            {/* <NavBarLogin /> */}
            <>
              {login ? (
                <>
                  <div className="px-5 mt-1" style={{ display: "flex" }}>
                    <img
                      className="userimg d-inline mt-1"
                      src={userNavImg}
                      alt="User"
                      style={{
                        float: "left",
                        borderRadius: "50%",
                        marginRight: "8px",
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    />

                    <div className="nameAndOptions">
                      <NavDropdown
                        title="USERNAME"
                        id="basic-nav-dropdown"
                        className="dropdown-menu-right mt-3"
                        style={{
                          color: "white",
                          padding: 0,
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        <NavDropdown.Item href="#Profile">
                          Notifications
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={NavLink}
                          href="#Profile"
                          to="/userprofile"
                        >
                          My Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={NavLink}
                          href="#Settings"
                          to="/settings"
                        >
                          Settings
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <NavLink to={"/login"}>
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              onClick={() => {
                                setLogin(false);
                              }}
                              style={{
                                color: "black",
                                boxShadow: "0px 0px 6px grey",
                              }}
                            >
                              Logout
                            </Button>
                          </NavLink>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="prof"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ButtonGroup variant="outlined" color="error" size="small">
                      <NavLink to={"/login"}>
                        <Button
                          // onClick={() => setLogin(true)}
                          style={{
                            color: "white",
                            boxShadow: "0px 0px 6px #f23500",
                          }}
                        >
                          Login
                        </Button>
                      </NavLink>
                      <NavLink to={"/signup"}>
                        <Button
                          style={{
                            color: "white",
                            boxShadow: "0px 0px 6px #f23500",
                          }}
                        >
                          Sign up
                        </Button>
                      </NavLink>
                    </ButtonGroup>
                  </div>
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
