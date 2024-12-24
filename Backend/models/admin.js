const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Ensure username is provided
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures unique emails
    },
    password: {
        type: String,
        required: true,  // Ensure password is provided
    },
});

// Before saving a user, hash the password
userSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }

    try {
        // Generate a salt and hash the password
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (err) {
        next(err);  // If there is an error, pass it to the next middleware
    }
});

// Create the model
const Admin = mongoose.model('admin', userSchema);

module.exports = Admin;
