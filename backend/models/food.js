const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,        // Name of food
    category: String,    // Biryani, Desserts, Meals
    price: Number,       // Price of food
    restaurant: String,  // Restaurant name
    imageUrl: String,    // URL for food image
    description: String  // Description of the food
});

module.exports = mongoose.model('Food', FoodSchema);
