const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect MongoDB
const MONGODB_URI = process.env.MONGODB_URI || process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/cooknextdoor';
mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Serve static files from Angular build
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend/browser')));

// Routes
const foodRoutes = require('./routes/foodRoutes');
app.use('/api', foodRoutes);

// Health check endpoint for Render
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', service: 'CookNextDoor Backend' });
});

// Catch all handler: send back Angular's index.html file for client-side routing
// This must be the last route
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/browser/index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
