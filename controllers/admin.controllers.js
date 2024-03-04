const adminArray = []
const addAdmin  = (req, res) =>
{
    const adminId= Math.floor(Math.random() * 10e5)
    const adminObj =
    {
        adminId,
        firstname : req.body.firstname,
        middlename : req.body.middlename,
        lastname : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        phoneNo : req.body.phoneNo,
        role : req.body.role,
        dateRegistered : Date.now()
    }
    adminArray.push(adminObj)
}
module.exports = {addAdmin}