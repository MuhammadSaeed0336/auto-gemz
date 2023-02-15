import React, { useState } from "react";
import { BsGem } from "react-icons/bs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./Auth.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [nameLabel, setNameLabel] = useState("Enter Full Name");
  const [email, setEmail] = useState("");
  const [emailLabel, setEmailLabel] = useState("Enter Email");
  const [contact, setContact] = useState("");
  const [contactLabel, setContactLabel] = useState("Enter Phone Number");
  const [address, setAddress] = useState("");
  const [addressLabel, setAddressLabel] = useState("Enter Permanent Address");
  const [password, setPassword] = useState("");
  const [passwordLabel, setPasswordLabel] = useState(
    "Enter Password(Min 8 Char)"
  );
  const [passwordText, setPasswordText] = useState();
  const minLength = "8";
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
              <input
                type="text"
                placeholder={nameLabel}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder={emailLabel}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder={contactLabel}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder={addressLabel}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder={passwordLabel}
                minLength={minLength}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (password.length < minLength) {
                    setPasswordText("Minimum 8 character Password");
                    if (
                      password.length === minLength ||
                      password.length > minLength
                    ) {
                      setPasswordText();
                    } else {
                      setPasswordText("Minimum 8 character Password");
                    }
                  }
                  else {
                    setPasswordText()
                  }
                  
                }}
              />
            </div>
            <span
              style={{
                marginTop: "-0.5rem",
                marginBottom: "0.5rem",
                textAlign: "center",
                color: "red",
              }}
            >
              {passwordText}
            </span>

            <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
              <Link to={"/signup"}>
                <Button
                  className="btn btn-light"
                  size="small"
                  onClick={() => {
                    if (
                      name === "" &&
                      email === "" &&
                      contact === "" &&
                      address === "" &&
                      password === ""
                    ) {
                      setNameLabel("Full Name Please");
                      setEmailLabel("Enter Valid Email");
                      setContactLabel("Enter Phone Number");
                      setAddressLabel("Your Permanent Address");
                      setPasswordLabel("Enter Secure Password");
                    } else if (
                      name === "" ||
                      email === "" ||
                      contact === "" ||
                      address === "" ||
                      password === ""
                    ) {
                      setNameLabel("Full Name Please");
                      setEmailLabel("Enter Valid Email");
                      setContactLabel("Enter Phone Number");
                      setAddressLabel("Your Permanent Address");
                      setPasswordLabel("Enter Secure Password");
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            <Link
              to={"/login"}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "red",
              }}
            >
              Already Have an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
