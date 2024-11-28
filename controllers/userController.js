// controllers/userController.js
const User = require('../models/userModel');

// View all users (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// View own profile (All users)
exports.getUserProfile = (req, res) => {
    res.json(req.user); // The authenticated user's data is attached to req.user
};
