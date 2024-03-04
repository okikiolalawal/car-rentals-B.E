const branchArray = []
const addBranch = (req, res) =>
{
    const branchId= Math.floor(Math.random() * 10e5)
    const branchObj =
    {
        branchId,
        branchName : req.body.branchName,
        dateAdded : Date.now()
    }
    branchArray.push(branchObj)
}
module.exports = {addBranch}