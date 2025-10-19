const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const Restaurant = require('../models/restaurant');

// Get all foods
router.get('/foods', async (req, res) => {
    const foods = await Food.find({ imageUrl: { $ne: null }, $and: [{ imageUrl: { $ne: '' } }] });
    res.json(foods);
});

// Add a new food
router.post('/foods', async (req, res) => {
    const newFood = new Food(req.body);
    await newFood.save();
    res.json(newFood);
});

// Get all restaurants
router.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
});

// Get restaurant by ID
router.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
});

// Add a new restaurant
router.post('/restaurants', async (req, res) => {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.json(newRestaurant);
});

module.exports = router;
