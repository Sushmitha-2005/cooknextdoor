const mongoose = require('mongoose');
const Food = require('./models/food');
const Restaurant = require('./models/restaurant');

mongoose.connect('mongodb://127.0.0.1:27017/cooknextdoor')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const foods = [
  {
    name: 'Cheeseburger',
    category: 'American',
    price: 180,
    description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Veg Noodles',
    category: 'Chinese',
    price: 160,
    description: 'Stir-fried noodles with mixed vegetables and soy sauce',
    imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Sushi Platter',
    category: 'Japanese',
    price: 350,
    description: 'Assorted fresh sushi rolls with wasabi and ginger',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Caesar Salad',
    category: 'Salad',
    price: 180,
    description: 'Fresh lettuce with Caesar dressing and croutons',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Cupcakes',
    category: 'Dessert',
    price: 140,
    description: 'Colorful cupcakes with buttercream frosting',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'French Fries',
    category: 'Snacks',
    price: 100,
    description: 'Crispy golden french fries with ketchup',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Spaghetti Pasta',
    category: 'Italian',
    price: 200,
    description: 'Classic spaghetti with meat sauce and parmesan',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Club Sandwich',
    category: 'American',
    price: 160,
    description: 'Triple-decker sandwich with chicken, bacon, and vegetables',
    imageUrl: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Bacon & Eggs',
    category: 'Breakfast',
    price: 150,
    description: 'Classic bacon and eggs with toast',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Fried Rice',
    category: 'Rice',
    price: 140,
    description: 'Wok-tossed rice with vegetables and eggs',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Tacos',
    category: 'Mexican',
    price: 180,
    description: 'Soft tacos filled with seasoned meat and vegetables',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Waffles',
    category: 'Breakfast',
    price: 130,
    description: 'Crispy waffles served with syrup and berries',
    imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Shawarma Roll',
    category: 'Middle Eastern',
    price: 170,
    description: 'Grilled meat wrapped in pita bread with garlic sauce',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Cappuccino Coffee',
    category: 'Beverages',
    price: 120,
    description: 'Rich espresso topped with steamed milk foam',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Steak',
    category: 'Non-Veg',
    price: 400,
    description: 'Grilled premium beef steak with herbs and spices',
    imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Tom Yum Soup',
    category: 'Thai',
    price: 160,
    description: 'Hot and sour soup with lemongrass, galangal, and prawns',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: 280,
    description: 'Pizza topped with pepperoni, cheese, and tomato sauce',
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Hummus with Pita',
    category: 'Middle Eastern',
    price: 140,
    description: 'Creamy hummus served with warm pita bread',
    imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Vegetable Soup',
    category: 'Healthy',
    price: 110,
    description: 'Fresh vegetable soup with herbs and croutons',
    imageUrl: 'https://images.unsplash.com/photo-1572441710534-680b56cb7b0a?w=500&h=400&fit=crop&auto=format'
  },
  {
    name: 'Chocolate Chip Cookies',
    category: 'Dessert',
    price: 90,
    description: 'Classic cookies loaded with chocolate chips',
    imageUrl: 'https://images.unsplash.com/photo-1601315481619-1b17c6a2e1f1?w=500&h=400&fit=crop&auto=format'
  }
];

const restaurants = [
  {
    name: 'Spice Garden',
    cuisine: 'Indian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    minimumOrder: 200,
    description: 'Authentic Indian cuisine with traditional spices and flavors',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 150,
    description: 'Wood-fired pizzas and authentic Italian pasta dishes',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Dragon Wok',
    cuisine: 'Chinese',
    rating: 4.4,
    deliveryTime: '30-40 min',
    minimumOrder: 180,
    description: 'Authentic Chinese cuisine with fresh ingredients and traditional recipes',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Burger Junction',
    cuisine: 'American',
    rating: 4.2,
    deliveryTime: '15-25 min',
    minimumOrder: 120,
    description: 'Juicy burgers, crispy fries, and classic American comfort food',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Sushi Master',
    cuisine: 'Japanese',
    rating: 4.6,
    deliveryTime: '35-45 min',
    minimumOrder: 250,
    description: 'Fresh sushi, sashimi, and traditional Japanese delicacies',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 100,
    description: 'Authentic Mexican tacos, burritos, and flavorful salsas',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Curry House',
    cuisine: 'Thai',
    rating: 4.4,
    deliveryTime: '25-35 min',
    minimumOrder: 160,
    description: 'Aromatic Thai curries and authentic Southeast Asian flavors',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pasta Corner',
    cuisine: 'Italian',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 140,
    description: 'Handmade pasta and traditional Italian recipes',
    imageUrl: 'https://images.unsplash.com/photo-1551892374-ecf889568430?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Green Garden',
    cuisine: 'Healthy',
    rating: 4.5,
    deliveryTime: '25-35 min',
    minimumOrder: 130,
    description: 'Fresh salads, smoothies, and nutritious meals for health-conscious foodies',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Sweet Dreams',
    cuisine: 'Desserts',
    rating: 4.7,
    deliveryTime: '15-25 min',
    minimumOrder: 80,
    description: 'Decadent desserts, cakes, and sweet treats for every occasion',
    imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Biryani Hub',
    cuisine: 'Indian',
    rating: 4.6,
    deliveryTime: '30-40 min',
    minimumOrder: 180,
    description: 'Specializing in aromatic biryani and rice dishes',
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Street Eats',
    cuisine: 'Street Food',
    rating: 4.4,
    deliveryTime: '15-25 min',
    minimumOrder: 90,
    description: 'Authentic Indian street food and chaat specials',
    imageUrl: 'https://images.unsplash.com/photo-1555126632-14561b1dba8e?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Dosa Delight',
    cuisine: 'South Indian',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 110,
    description: 'Crispy dosas, idlis, and South Indian specialties',
    imageUrl: 'https://images.unsplash.com/photo-1589710743002-415b9ba28c39?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Veggie Garden',
    cuisine: 'Vegetarian',
    rating: 4.5,
    deliveryTime: '25-35 min',
    minimumOrder: 140,
    description: 'Pure vegetarian dishes with rich flavors and spices',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Fusion Flavors',
    cuisine: 'Fusion',
    rating: 4.2,
    deliveryTime: '40-50 min',
    minimumOrder: 200,
    description: 'Creative fusion dishes combining multiple cuisines',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Seoul Kitchen',
    cuisine: 'Korean',
    rating: 4.4,
    deliveryTime: '35-45 min',
    minimumOrder: 220,
    description: 'Authentic Korean BBQ and traditional dishes with bold flavors',
    imageUrl: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pho Vietnam',
    cuisine: 'Vietnamese',
    rating: 4.3,
    deliveryTime: '25-35 min',
    minimumOrder: 150,
    description: 'Traditional Vietnamese pho and fresh spring rolls',
    imageUrl: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Mediterranean Delight',
    cuisine: 'Mediterranean',
    rating: 4.5,
    deliveryTime: '30-40 min',
    minimumOrder: 280,
    description: 'Healthy Mediterranean cuisine with olive oil, fresh herbs, and seafood',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Bombay Express',
    cuisine: 'Indian',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 120,
    description: 'Quick and tasty Indian street food and curry dishes',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Le Petit Bistro',
    cuisine: 'French',
    rating: 4.6,
    deliveryTime: '45-55 min',
    minimumOrder: 350,
    description: 'Elegant French cuisine with fine wines and delicate flavors',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Tandoori Nights',
    cuisine: 'North Indian',
    rating: 4.4,
    deliveryTime: '35-45 min',
    minimumOrder: 200,
    description: 'Specializing in tandoori dishes and rich North Indian curries',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Ocean Fresh',
    cuisine: 'Seafood',
    rating: 4.5,
    deliveryTime: '30-40 min',
    minimumOrder: 300,
    description: 'Fresh seafood and fish dishes with coastal flavors',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pasta La Vista',
    cuisine: 'Italian',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 180,
    description: 'Authentic Italian pasta and wood-fired pizza',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Bangkok Street',
    cuisine: 'Thai',
    rating: 4.3,
    deliveryTime: '30-40 min',
    minimumOrder: 170,
    description: 'Spicy Thai street food and traditional curry dishes',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'The Hungry Bear',
    cuisine: 'American',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 160,
    description: 'Hearty American classics and comfort food favorites',
    imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Spice Route',
    cuisine: 'Pan Asian',
    rating: 4.4,
    deliveryTime: '35-45 min',
    minimumOrder: 250,
    description: 'Pan-Asian cuisine featuring dishes from across Asia',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Green Leaf Cafe',
    cuisine: 'Healthy',
    rating: 4.3,
    deliveryTime: '25-35 min',
    minimumOrder: 140,
    description: 'Organic, plant-based meals and superfood smoothies',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Midnight Diner',
    cuisine: '24/7',
    rating: 4.0,
    deliveryTime: '15-25 min',
    minimumOrder: 100,
    description: 'Open 24/7 with all-day breakfast and late-night cravings',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Casa Mexicana',
    cuisine: 'Mexican',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 130,
    description: 'Authentic Mexican cuisine with fresh tortillas and salsa',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Royal Feast',
    cuisine: 'Fine Dining',
    rating: 4.7,
    deliveryTime: '50-60 min',
    minimumOrder: 500,
    description: 'Premium fine dining experience with gourmet dishes',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Wok & Roll',
    cuisine: 'Chinese',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 140,
    description: 'Fast and delicious Chinese takeout with wok-tossed dishes',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'The Salad Bar',
    cuisine: 'Healthy',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 120,
    description: 'Fresh salads, grain bowls, and healthy meal options',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Burger Boss',
    cuisine: 'Fast Food',
    rating: 4.0,
    deliveryTime: '15-25 min',
    minimumOrder: 100,
    description: 'Quick burgers, fries, and fast food favorites',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Arabian Nights',
    cuisine: 'Middle Eastern',
    rating: 4.4,
    deliveryTime: '30-40 min',
    minimumOrder: 190,
    description: 'Authentic Middle Eastern cuisine with aromatic spices',
    imageUrl: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Dim Sum Palace',
    cuisine: 'Chinese',
    rating: 4.5,
    deliveryTime: '35-45 min',
    minimumOrder: 220,
    description: 'Traditional dim sum and Cantonese specialties',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Brew & Chew',
    cuisine: 'Cafe',
    rating: 4.2,
    deliveryTime: '20-30 min',
    minimumOrder: 150,
    description: 'Artisan coffee and light cafe fare with fresh pastries',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Spicy Sichuan',
    cuisine: 'Chinese',
    rating: 4.3,
    deliveryTime: '30-40 min',
    minimumOrder: 180,
    description: 'Authentic Sichuan cuisine with bold and spicy flavors',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Protein Palace',
    cuisine: 'Healthy',
    rating: 4.4,
    deliveryTime: '25-35 min',
    minimumOrder: 200,
    description: 'High-protein meals for fitness enthusiasts and athletes',
    imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Tandoor Express',
    cuisine: 'Indian',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 160,
    description: 'Quick Indian meals with tandoori and curry specialties',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pancake House',
    cuisine: 'Breakfast',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 120,
    description: 'All-day breakfast with pancakes, waffles, and morning favorites',
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Sushi Zen',
    cuisine: 'Japanese',
    rating: 4.6,
    deliveryTime: '40-50 min',
    minimumOrder: 300,
    description: 'Premium sushi and Japanese fine dining experience',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Tikka Masala',
    cuisine: 'Indian',
    rating: 4.4,
    deliveryTime: '30-40 min',
    minimumOrder: 180,
    description: 'Rich and creamy curries with authentic Indian spices',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Falafel Corner',
    cuisine: 'Middle Eastern',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 130,
    description: 'Fresh falafel, shawarma, and Mediterranean specialties',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Noodle Bar',
    cuisine: 'Asian',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 140,
    description: 'Various noodle dishes from different Asian cuisines',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Dessert Paradise',
    cuisine: 'Desserts',
    rating: 4.5,
    deliveryTime: '15-25 min',
    minimumOrder: 90,
    description: 'Decadent desserts, cakes, and sweet treats for all occasions',
    imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Grill Master',
    cuisine: 'Barbecue',
    rating: 4.3,
    deliveryTime: '35-45 min',
    minimumOrder: 250,
    description: 'Smoky barbecue dishes and grilled specialties',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Vegan Vibes',
    cuisine: 'Vegan',
    rating: 4.4,
    deliveryTime: '30-40 min',
    minimumOrder: 170,
    description: 'Plant-based cuisine with innovative vegan dishes',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Curry in Hurry',
    cuisine: 'Indian',
    rating: 4.0,
    deliveryTime: '20-30 min',
    minimumOrder: 110,
    description: 'Quick Indian curry and rice dishes for busy days',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Poke Bowl',
    cuisine: 'Hawaiian',
    rating: 4.3,
    deliveryTime: '25-35 min',
    minimumOrder: 190,
    description: 'Fresh poke bowls with Hawaiian flavors and ingredients',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Soup Station',
    cuisine: 'Soups',
    rating: 4.2,
    deliveryTime: '20-30 min',
    minimumOrder: 100,
    description: 'Artisanal soups and comforting bowl meals',
    imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Tapa Time',
    cuisine: 'Spanish',
    rating: 4.4,
    deliveryTime: '35-45 min',
    minimumOrder: 220,
    description: 'Spanish tapas and traditional Mediterranean small plates',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Wing Stop',
    cuisine: 'American',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 150,
    description: 'Chicken wings with various sauces and American sides',
    imageUrl: 'https://images.unsplash.com/photo-1608039755401-742074f3e577?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Ramen House',
    cuisine: 'Japanese',
    rating: 4.5,
    deliveryTime: '30-40 min',
    minimumOrder: 200,
    description: 'Authentic ramen bowls with rich broth and fresh noodles',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Gelato Corner',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '15-25 min',
    minimumOrder: 80,
    description: 'Authentic Italian gelato and frozen dessert specialties',
    imageUrl: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Kebab Palace',
    cuisine: 'Middle Eastern',
    rating: 4.3,
    deliveryTime: '30-40 min',
    minimumOrder: 180,
    description: 'Succulent kebabs and Middle Eastern grilled specialties',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Bowl Republic',
    cuisine: 'Healthy',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 160,
    description: 'Nutritious grain bowls and healthy meal combinations',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pizza Factory',
    cuisine: 'Italian',
    rating: 4.0,
    deliveryTime: '25-35 min',
    minimumOrder: 140,
    description: 'Fresh pizzas made to order with quality ingredients',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Tea House',
    cuisine: 'Beverages',
    rating: 4.4,
    deliveryTime: '15-25 min',
    minimumOrder: 90,
    description: 'Specialty teas, bubble tea, and refreshing beverages',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Steak House',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '40-50 min',
    minimumOrder: 400,
    description: 'Premium steaks and grilled meats with classic sides',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Naan Stop',
    cuisine: 'Indian',
    rating: 4.2,
    deliveryTime: '25-35 min',
    minimumOrder: 130,
    description: 'Fresh naan breads with curry dishes and Indian specialties',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Smoothie Bar',
    cuisine: 'Healthy',
    rating: 4.3,
    deliveryTime: '20-30 min',
    minimumOrder: 120,
    description: 'Fresh fruit smoothies and healthy drink options',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Burrito Bandits',
    cuisine: 'Mexican',
    rating: 4.1,
    deliveryTime: '20-30 min',
    minimumOrder: 140,
    description: 'Giant burritos and Mexican favorites made fresh',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Sushi Train',
    cuisine: 'Japanese',
    rating: 4.4,
    deliveryTime: '35-45 min',
    minimumOrder: 250,
    description: 'Conveyor belt sushi and fresh Japanese delicacies',
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Pasta Palace',
    cuisine: 'Italian',
    rating: 4.3,
    deliveryTime: '30-40 min',
    minimumOrder: 190,
    description: 'Handcrafted pasta and authentic Italian recipes',
    imageUrl: 'https://images.unsplash.com/photo-1551892374-ecf889568430?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  },
  {
    name: 'Wrap Stars',
    cuisine: 'Healthy',
    rating: 4.2,
    deliveryTime: '20-30 min',
    minimumOrder: 130,
    description: 'Healthy wraps and sandwiches with fresh ingredients',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=250&fit=crop&crop=center',
    isOpen: true
  }
];

// Clear existing data and seed fresh
Promise.all([Restaurant.deleteMany({}), Food.deleteMany({})])
.then(() => {
    return Restaurant.insertMany(restaurants);
})
.then(() => {
    console.log('Sample restaurants added successfully');
    return Food.insertMany(foods);
})
.then(() => {
    console.log('Sample foods added successfully');
    mongoose.connection.close();
})
.catch(err => console.log(err));
