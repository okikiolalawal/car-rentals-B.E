const carArray = []
const BookingsArray = []
const addCar  = (req, res) =>
{
    const carId= Math.floor(Math.random() * 10e5)
    const carObj =
    {
        carId,
        image : req.body.image,
        Make  : req.body.Make,
        Model : req.body.Model,
        Year : req.body.Year,
        Price : req.body.price,
        categoryId : req.body.category,
        branchId : req.body.branch,
        plateNo : req.body.plateNo,
        isAvailable : false,
        description : req.body.description,
        dateAdded : Date.now()
    }
    carArray.push(carObj)
    const string = JSON.stringify(carObj)
    console.log(string)
}
const bookCar = (req, res)=>
{
    const bookingObj = 
    {
        carId : req.body.carId,
        customer : req.body.customerId,
        DateBooked : Date.now()
    }
    BookingsArray.push(bookingObj)
} 
const getBookingsById  = (req, res)=>
{
   const loginEmail = BookingsArray.filter((e)=>{e == req.body})
   
}
module.exports = {addCar,bookCar}