// routes/userRoutes.js
const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');
const userController = require('../controllers/userController');

const router = express.Router();

// Admin-only route: View all users
router.get('/', authenticate, checkRole('admin'), userController.getAllUsers);

// User route: View own profile
router.get('/profile', authenticate, userController.getUserProfile);

module.exports = router;
