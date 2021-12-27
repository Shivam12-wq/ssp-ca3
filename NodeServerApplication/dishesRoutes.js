// Referred to the routes concept in Express
// Reference Link - https://medium.com/@KumarNik_/node-js-routing-with-express-js-91aa6dc129be
const express = require('express');

// The dishesController file contains the logic to add, remove and list
const dishesController = require('./controller/dishesController');

const router = express.Router();

// Route for GET HTTP Method to list all the dishes
router.get('/', dishesController.getDishes);

// Route for POST HTTP Method to add a new dish
router.post('/', dishesController.postDishes);

// Route for DELETE HTTP Method to delete a dish
router.delete('/:id', dishesController.DeleteDishes);

module.exports = router;