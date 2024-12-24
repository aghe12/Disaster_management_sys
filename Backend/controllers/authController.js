// const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const Volunteer = require('../models/volunteer');
const User = require('../models/user');

const signup = async (req, res) => {
    const { username, email, password, userType } = req.body;  // Changed 'name' to 'username'

    console.log(username, email, password, userType);
    
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Create a new user
        const user = new User({ username, email, password });
        await user.save();

        // Create JWT token
        const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, {
            expiresIn: "1h",  // Set token expiration time
        });

        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { signup }