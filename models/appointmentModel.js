// models/appointmentModel.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // This would be a moderator (doctor)
    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
