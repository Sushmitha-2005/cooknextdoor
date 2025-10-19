const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cooknextdoor', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const foodRoutes = require('./routes/foodRoutes');
app.use('/api', foodRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to CookNextDoor API');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});