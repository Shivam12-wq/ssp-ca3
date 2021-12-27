// Read the Dish JSON File and parse the data from JSON to Object
const fs= require('fs');
const data = fs.readFileSync('./DishDetails_JSON.json');
let dishes = JSON.parse(data);

// Followed some of the coding standards followed in the steps of the below link:
// https://letsstartwebsitedevelopment.com/node-api-using-express/

// Return all the dishes with the HTTP status code 200
exports.getDishes = (req, res, next) => {
    res.status(200).send(dishes)
};

// Store the new dish by checking the validation if the required values are exists. 
// If validation fails, return the error code.
exports.postDishes = (req, res, next) => {
    if (req.body.id && req.body.type && req.body.name && req.body.price)
    {
        // Push the values to Dishes Array
        // Code referred - https://www.geeksforgeeks.org/node-js-push-function/
        dishes.push({"id":req.body.id,"type":req.body.type,"name":req.body.name,"price":req.body.price});
        res.status(200).send(dishes)
    }
    else 
    {
        res.status(400).json({ message: 'Invalid Request. All dish Details are required to added' })
    }
};

// Delete the dish, if the Dish ID exists in the list and return the list after removal
exports.DeleteDishes = (req, res, next) => {
    const dishId = req.params.id;
    let countBeforeDelete = dishes.length;
    
    // Filtering the records on based of the ID to delete.
    // Code referred - https://www.javascripttutorial.net/javascript-array-filter/
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