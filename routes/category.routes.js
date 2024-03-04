const express = require("express")
const router = express.Router()
const {addCategory} = require("../controllers/category.controllers")

router.post("/addCategory",addCategory)

module.exports = router