// routes/appointmentRoutes.js
const express = require('express');
const authenticate = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');
const appointmentController = require('../controllers/appointmentController');

const router = express.Router();

// Moderator route: Create an appointment
router.post('/appointment', authenticate, checkRole('moderator'), appointmentController.createAppointment);

module.exports = router;
