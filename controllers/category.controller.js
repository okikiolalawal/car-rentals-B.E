const categoryArray = []
const addCategory = (req, res) =>
{
    const categoryId= Math.floor(Math.random() * 10e5)
    const categoryObj =
    {
        categoryId,
        categoryName : req.body.categoryName,
        dateAdded : Date.now()
    }
    categoryArray.push(categoryObj)
}
module.exports = {addCategory}