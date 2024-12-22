require('dotenv').config();// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Import the User model
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

// Load environment variables from .env file
 // This loads the variables from .env file

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Signup route with validation
app.post(
    '/signup',
    [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        // Check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'User already exists' });
            }

            // Create new user
            const newUser = new User({
                username,
                email,
                password,
            });

            await newUser.save(); // Save the user to the database
            res.status(201).json({ message: 'Signup successful', user: newUser });
        } catch (err) {
            console.error('Error during signup:', err);
            res.status(500).json({ error: 'Signup failed' });
        }
    }
);

// MongoDB connection (ensure you're using the correct URI)
// Log the MongoDB URI to ensure it's being loaded correctly
console.log('MongoDB URI:', process.env.MONGODB_URI); // Logs the MongoDB URI for debugging

// Connect to MongoDB using the URI from the .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
