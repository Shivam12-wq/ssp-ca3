const fs= require('fs');
const data = fs.readFileSync('./DishDetails_JSON.json');
let dishes = JSON.parse(data);

exports.getDishes = (req, res, next) => {
    res.status(200).send(dishes)
};

exports.postDishes = (req, res, next) => {
    if (req.body.id && req.body.type && req.body.name && req.body.price)
    {
        dishes.push({"id":req.body.id,"type":req.body.type,"name":req.body.name,"price":req.body.price});
        res.status(200).send(dishes)
    }
    else 
    {
        res.status(400).json({ message: 'Invalid Request. All dish Details are required to added' })
    }
};

exports.DeleteDishes = (req, res, next) => {
    const dishId = req.params.id;
    let countBeforeDelete = dishes.length;
    dishes = dishes.filter(d => d.id !== dishId)
    if (countBeforeDelete >  dishes.length)
    {
        res.status(200).send(dishes)
    }
    else 
    {
        res.status(400).json({ message: 'Invalid Request. Dish record not found to get deleted' })
    }
};