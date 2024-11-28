// controllers/appointmentController.js
const Appointment = require('../models/appointmentModel');

// Create an appointment (Moderator only)
exports.createAppointment = async (req, res) => {
    const { userId, doctorId, appointmentDate } = req.body;

    try {
        const newAppointment = new Appointment({ userId, doctorId, appointmentDate });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Error creating appointment' });
    }
};
