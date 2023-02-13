import React from "react";
import { BsGem } from "react-icons/bs";
import "./Auth.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div
        className="main"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container form"
          style={{
            width: "35vw",
            backgroundColor: "black",
            opacity: "0.7",
            borderRadius: "1rem",
            boxShadow: "0rem 0rem 24px 2rem ",
            border: "1rem solid black",
          }}
        >
          <div className="row">
            <div className="col-12 mt-2" style={{ textAlign: "center" }}>
              <h1 className=" d-inline" style={{ color: "Grey" }}>
                AUTO
              </h1>
              <BsGem
                className="mb-4 m-1"
                style={{ color: "white", fontSize: "1.5rem" }}
              />
              <h1 className="d-inline" style={{ color: "red" }}>
                GEMZ
              </h1>
            </div>
            <div className="inputs col-12">
              <input type="email" placeholder="Enter Email" />
              <input type="password" placeholder="Enter Password" />
            </div>
            <div
              className="icons col-12"
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "-1rem",
              }}
            >
              <Button
                id="iconBtn"
                style={{
                  fontSize: "3rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                <AiFillGoogleCircle />
              </Button>
              <Button
                id="iconBtn"
                style={{
                  fontSize: "2.6rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                <BsFacebook />
              </Button>
            </div>
            <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
              <Link to={"/"}>
                <Button
                  className="btn btn-light"
                  size="small"
                  style={{ width: "5rem" }}
                >
                  Login
                </Button>
              </Link>
            </div>
            <Link
              to={"/signup"}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "red",
              }}
            >
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;