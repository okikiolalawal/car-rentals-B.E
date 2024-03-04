const express = require("express")
const router = express.Router()
const {addCustomer} = require("../controllers/customer.controllers")

router.post("/addCustomer",addCustomer)

module.exports = router