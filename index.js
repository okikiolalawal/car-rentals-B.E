const express  = require ("express")
const app = express()
app.use(express.urlencoded({extended:true, limit:"5mb"}))
app.use(express.json())
const cors = require("cors")
app.use(cors())
require("dotenv").config()
// const mongoose = require("mongoose");
let PORT = process.env.PORT

const router = require("./routes/customer.routes")
const adminRouter = require("./routes/admin.routes")
const carRouter = require("./routes/car.routes")
const categoryRouter = require("./routes/category.routes")
const branchRouter = require("./routes/branch.routes")
app.use("/customer", router);
app.use("/admin",adminRouter)
app.use("/car",carRouter)
app.use("/category",categoryRouter)
app.use("/admin",branchRouter)

app.listen(PORT,()=>{
    console.log("App is running at port:" + PORT)
})