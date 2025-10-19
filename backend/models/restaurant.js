const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    rating: Number,
    deliveryTime: String,
    minimumOrder: Number,
    imageUrl: String,
    description: String,
    isOpen: { type: Boolean, default: true }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
