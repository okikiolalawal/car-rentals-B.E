const express = require("express")
const router = express.Router()
const {addBranch} = require("../controllers/branch.controllers")

router.post("/addBranch",addBranch)

module.exports = router