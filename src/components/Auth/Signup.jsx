import React from "react";
import { BsGem } from "react-icons/bs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./Auth.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Signup = () => {
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
              <div className="cont" style={{ marginLeft: "4rem" }}>
                <div class="button-wrap">
                  <label class="filebutton" for="upload">
                    Image <CameraAltIcon />
                  </label>
                  <input id="upload" type="file" />
                </div>
              </div>
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="number" placeholder="Enter Contact" />
              <input type="text" placeholder="Enter Address" />
              <input type="password" placeholder="Enter Password" />
            </div>

            <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
              <Link to={"/signup"}>
                <Button
                  className="btn btn-light"
                  size="small"
                  style={{ width: "6rem" }}
                >
                  Signup
                </Button>
              </Link>
            </div>
              <Link to={"/login"} style={{textAlign:"center",textDecoration:"none",color:"red"}}>Already Have an Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
