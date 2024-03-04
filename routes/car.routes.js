const express = require("express")
const router = express.Router()
const {addCar} = require("../controllers/car.controllers")

router.post("/addCar",addCar)

module.exports = router