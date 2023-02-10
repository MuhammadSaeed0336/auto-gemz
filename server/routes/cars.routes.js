const express = require('express');
const router = express.Router()
const carContoller = require('../controllers/car.controllers');

router.get("/getAllCars", carContoller.getAllCars);
router.get("/getOneCar/:id", carContoller.getOneCar);
router.post("/addUsedCar", carContoller.addUsedCar);
router.put("/updateUsedCar/:id", carContoller.updateUsedCar);
router.delete("/deleteUsedCar/:id", carContoller.deleteUsedCar);


module.exports = router;
