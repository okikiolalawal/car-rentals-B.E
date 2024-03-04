const express = require("express")
const router = express.Router()
const {addAdmin} = require("../controllers/admin.controllers")

router.post("/addAdmin",addAdmin)

module.exports = router