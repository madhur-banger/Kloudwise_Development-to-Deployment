const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user.routes');
const User = require('./models/user.model')
require('dotenv').config({ path: '../.env' });

const PORT = process.env.PORT;
  
// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => res.send('Backend is running!'));

app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));