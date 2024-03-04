const customerArray = []
const addCustomer  = (req, res) =>
{
    const customerId= Math.floor(Math.random() * 10e5)
    const customerObj =
    {
        customerId,
        firstname : req.body.firstname,
        middlename : req.body.middlename,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        phoneNo : req.body.phoneNo,
        role : req.body.role,
        dateRegistered : Date.now()
    }
    customerArray.push(customerObj)
}
module.exports = {addCustomer}