import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "reactstrap";
import DialpadIcon from "@mui/icons-material/Dialpad";
// import { useAddUsedCarMutation } from "../../../features/cars/carSlice";

const RentOutCar = () => {
  // const [addUsedCar] = useAddUsedCarMutation();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const file = event.target.files
  //   debugger;
  //   const {
  //     city: { value: city },
  //     carInfo: { value: carInfo },
  //     register: { value: register },
  //     year: { value: year },
  //     enginetype: { value: enginetype },
  //     transmission: { value: transmission },
  //     color: { value: color },
  //     mileage: { value: mileage },
  //     price: { value: price },
  //     description: { value: description },
  //     image: { value: image },
  //     contact: { value: contact },
  //     secondContact: { value: secondContact },
  //   } = event.target.elements;

  //   addUsedCar({
  //     city: city,
  //     carInfo: carInfo,
  //     register: register,
  //     year: year,
  //     enginetype: enginetype,
  //     transmission: transmission,
  //     color: color,
  //     mileage: mileage,
  //     price: price,
  //     description: description,
  //     image: image,
  //     contact: contact,
  //     secondContact: secondContact,
  //   });
  //   // console.log(city, carInfo, enginetype, image);
  // };
  return (
    <div className="main" style={{ marginTop: "11vh" }}>
      <div className="container mb-4">
        <div
          className="head bg-dark text-light mb-2"
          style={{ textAlign: "center" }}
        >
          <h2>Car information</h2>
          <small>All Fields Are Mandatory</small>
        </div>
        <Form style={{ color: "white" }}>
          <FormGroup row>
            <Label for="address" sm={2}>
              address
            </Label>
            <Col sm={10}>
              <Input id="address" name="address" placeholder="Enter Pickup Location" type="text"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="carInfo" sm={2}>
              Car carInfo
            </Label>
            <Col sm={10}>
              <Input
                id="carInfo"
                name="carInfo"
                placeholder="Make/Model/Version"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="year" sm={2}>
              year
            </Label>
            <Col sm={10}>
              <Input id="year" placeholder="Enter Model Year" name="year" type="text" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="enginetype" sm={2}>
              Engine Type
            </Label>
            <Col sm={10}>
              <Input id="enginetype" name="enginetype" type="select">
                <optgroup label="Fuel">
                  <option>Diesel</option>
                  <option>Petrol</option>
                </optgroup>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="transmission" sm={2}>
              transmission
            </Label>
            <Col sm={10}>
              <Input id="transmission" name="transmission" type="select">
                <optgroup label="transmission">
                  <option>Automatic</option>
                  <option>Manual</option>
                </optgroup>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="color" sm={2}>
              color
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
            <Label for="ren" sm={2}>
              Rent Per Day (Rs)
            </Label>
            <Col sm={10}>
              <InputGroup id="ren">
                <Button className="btn-dark" disabled>
                  PKR
                </Button>
                <Input
                  type="text"
                  id="rent"
                  name="rent"
                  placeholder="rent"
                />
              </InputGroup> 
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="desc" sm={2}>
              description
            </Label>
            <Col sm={10}>
              <InputGroup id="desc">
                <Input id="description" name="description" type="textarea" />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="img" sm={2}>
              Upload image
            </Label>
            <Col sm={10}>
              <InputGroup id="img">
                <Input id="image" name="image" type="file" />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="No." sm={2}>
              Mobile Number
            </Label>
            <Col sm={10}>
              <InputGroup id="No.">
                <Button className="btn-dark" disabled>
                  <DialpadIcon />
                </Button>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Mobile Number"
                />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="secondContact" sm={2}>
              Second Number
            </Label>
            <Col sm={10}>
              <Input
                id="secondContact"
                name="secondContact"
                type="text"
                placeholder="Second Number"
              />
            </Col>
          </FormGroup>
          <Button className="btn btn-light" outline>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RentOutCar;
