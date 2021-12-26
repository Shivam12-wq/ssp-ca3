const express = require('express');

const dishesController = require('../controller/dishesController');

const router = express.Router();

router.get('/', dishesController.getDishes);

router.post('/', dishesController.postDishes);

router.delete('/:id', dishesController.DeleteDishes);

module.exports = router;