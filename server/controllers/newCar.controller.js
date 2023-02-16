const db = require("../models/index");
const NewCar = db.newcar;

exports.getAllNewCars = (req, res) => {
  NewCar.find((err, cars) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable To Find Record",
      });
    }
    return res.send({
      status: "Success",
      cars: cars,
    });
  });
};

exports.getOneNewCar = (req, res) => {
  const { id } = req.params;
  NewCar.findById(id, (err, newcar) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Find this NewCar",
      });
    }
    return res.send({
      status: "Success",
      newcar,
    });
  });
};

exports.addNewCar = async (req, res) => {
  const {
    city,
    carInfo,
    year,
    enginetype,
    transmission,
    color,
    price,
    description,
    image,
  } = req.body;
  const newcar = new NewCar({
    city,
    carInfo,
    year,
    enginetype,
    transmission,
    color,
    price,
    description,
    image,
  });
  newcar.save((err, newRecord) => {
    if (err) {
      return res.status(500).send({
        status: "error",
        message: "Unable to Add NewCar to database",
      });
    }
    return res.send({
      status: "Success",
      data: newRecord,
    });
  });
};

exports.updateNewCar = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  NewCar.findByIdAndUpdate(id, body, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Update records",
      });
    }
    return res.send({
      status: "Updated",
      data: record,
    });
  });
};

exports.deleteNewCar = (req, res) => {
  const { id } = req.params;
  NewCar.findByIdAndDelete(id, (err, record) => {
    if (err) {
      return res.status(500).send({
        status: "Failed",
        message: "Unable to Delete records",
      });
    }
    return res.send({
      status: "Deleted",
      data: record,
    });
  });
};