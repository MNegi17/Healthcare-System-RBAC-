// models/userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define roles as constants to avoid mistakes with string literals
const roles = ['admin', 'moderator', 'user'];

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: roles,  // Enum ensures that the role is one of the predefined roles
        default: 'user', // Default role is 'user'
    },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Password verification method
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
