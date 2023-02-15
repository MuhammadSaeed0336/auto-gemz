import React from "react";
import { BsGem } from "react-icons/bs";
import { Form, FormGroup, Input, Label } from "reactstrap";
import "./About.css";

const About = () => {
  return (
    <div style={{ marginTop: "11vh" }}>
      <div className="row">
        <div className="col-12 mt-4 mb-1" style={{ textAlign: "center" }}>
          <h1
            className=" d-inline"
            style={{ color: "black", fontWeight: "bold" }}
          >
            AUTO
          </h1>
          <BsGem
            className="mb-4 m-1"
            style={{ color: "white", fontSize: "1.5rem" }}
          />
          <h1 className="d-inline" style={{ color: "red" }}>
            GEMZ
          </h1>
          <h6 style={{ color: "white" }}>
            An Online Car Showroom, providing services like buying, selling and
            renting cars.
          </h6>
        </div>
        <hr style={{ boxShadow: "0px 0px 1rem 1.5rem grey" }} />

        <div className="col-12 container mt-2">
          <div className="container section1">
            <h2 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
              Give Us Your Feedback
            </h2>
            <div className="row ">
              <Form>
                <div className="row mt-4">
                  <div className="col-6">
                    <FormGroup className="d-flex justify-content-center">
                      <Label for="email" lg={2} style={{ color: "white" }}>
                        Enter Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                        style={{ width: "15rem" }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-6 ">
                    <FormGroup className="d-flex justify-content-center">
                      <Label for="feed" lg={2} style={{ color: "white" }}>
                        Feedback
                      </Label>
                      <Input
                        id="feed"
                        name="feed"
                        type="select"
                        style={{ width: "15rem" }}
                      >
                        <option>Satisfied</option>
                        <option>Not Satisfied</option>
                      </Input>
                    </FormGroup>
                  </div>
                  <div className="col-12">
                    <FormGroup className="d-flex mt-4 justify-content-center">
                      <Label for="feed" lg={1} style={{ color: "white" }}>
                        Comment
                      </Label>
                      <Input
                        id="comment"
                        name="comment"
                        type="textarea"
                        placeholder="Describe Your Experience"
                        style={{ width: "60%", height: "5rem" }}
                      />
                    </FormGroup>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>

        <div className="container col-12 mt-1">
          <div className="container section2">
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              USER FEEDBACKS
            </h2>
            <div className="row gap-5 d-flex justify-content-center mt-4 mb-5">
              <div className="col-3">
                <div className="container card" style={{ opacity: "0.6" }}>
                  <div className="col-12 mt-2" style={{ textAlign: "center" }}>
                    <h5>Email</h5>
                  </div>
                  <div className="col-12">
                    <h6>Status</h6>
                  </div>
                  <div className="col-12">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae temporibus, praesentium reiciendis totam
                      accusantium quis pariatur libero quibusdam consequuntur
                      accusamus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
