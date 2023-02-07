import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  Label,
} from "reactstrap";
import DialpadIcon from "@mui/icons-material/Dialpad";

const PostAddForm = () => {
  return (
    <div className="container mt-4 mb-4">
      <div
        className="head bg-dark text-light mb-2"
        style={{ textAlign: "center" }}
      >
        <h2>Car information</h2>
        <small>All Fields Are Mandatory</small>
      </div>
      <Form>
        <FormGroup row>
          <Label for="city" sm={2}>
            City
          </Label>
          <Col sm={10}>
            <Input id="city" name="city" type="select">
              <option>Select City</option>
              <option>Rawalpindi</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Karachi</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="info" sm={2}>
            Car Info
          </Label>
          <Col sm={10}>
            <Input
              id="info"
              name="carInfo"
              placeholder="Make/Model/Version"
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="register" sm={2}>
            Registered In
          </Label>
          <Col sm={10}>
            <Input id="register" name="select" type="select">
              <option></option>
              <optgroup label="Un-Registered">
                <option>Un-Registered</option>
              </optgroup>
              <optgroup label="Provinces">
                <option>Punjab</option>
                <option>Sindh</option>
              </optgroup>
              <optgroup label="Popular Citites">
                <option>Rawalpindi</option>
                <option>Islamabad</option>
                <option>Karachi</option>
                <option>Lahore</option>
              </optgroup>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="color" sm={2}>
            Color
          </Label>
          <Col sm={10}>
            <Input id="color" name="color" type="select">
              <option></option>
              <option>White</option>
              <option>Silver</option>
              <option>Black</option>
              <option>Gray</option>
              <option>Blue</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="mileage" sm={2}>
            Mileage (km)
          </Label>
          <Col sm={10}>
            <InputGroup id="mileage">
              <Button className="btn-dark" disabled>
                KM
              </Button>
              <Input type="text" placeholder="Mileage" />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Price (Rs)
          </Label>
          <Col sm={10}>
            <InputGroup id="price">
              <Button className="btn-dark" disabled>
                PKR
              </Button>
              <Input type="text" placeholder="Price" />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <InputGroup id="description">
              <Input id="description" name="text" type="textarea" />
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="images" sm={2}>
            Upload Images
          </Label>
          <Col sm={10}>
            <Input id="images" name="file" type="file" />
            <FormText>Add at least 4 clear pictures</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="contact" sm={2}>
            Mobile Number
          </Label>
          <Col sm={10}>
            <InputGroup id="contact">
              <Button className="btn-dark" disabled>
                <DialpadIcon />
              </Button>
              <Input type="text" placeholder="Mobile Number" />
            </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="secondContact" sm={2}>
            Second Number
          </Label>
          <Col sm={10}>
            <Input id="secondContact" type="text" placeholder="Second Number" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default PostAddForm;
