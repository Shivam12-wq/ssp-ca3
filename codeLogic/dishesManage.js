const fs= require('fs');
const data = fs.readFileSync('./DishDetails_JSON.json');
let dishes = JSON.parse(data);

module.exports = class Dish {
    constructor(id, type, name, price) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
    }

    static saveNewDish() {
        
    }

    static deleteDishById(id) {
       
    }

    static getAllDishes() {
        
    }
};