const express = require("express");
const router = express.Router();
const newCarController = require("../controllers/newCar.controller");

router.get("/getAllNewCars", newCarController.getAllNewCars);
router.get("/getOneNewCar/:id", newCarController.getOneNewCar);
router.post("/addNewCar", newCarController.addNewCar);
router.put("/updateNewCar/:id", newCarController.updateNewCar);
router.delete("/deleteNewCar/:id", newCarController.deleteNewCar);

module.exports = router;
