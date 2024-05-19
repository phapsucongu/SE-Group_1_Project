const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema(
    {
        lawyer: {
            type: mongoose.Types.ObjectId,
            ref: "Expert",
            required: true,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "ACCEPTED", "REJECTED", "CANCELLED", "COMPLETED"],
            default: "PENDING",
        },
        description: {
            type: String,
            required: true,
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        lawyerName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: true,
        }
    },
);
const Appointment = mongoose.model('appointments', AppointmentSchema);
module.exports = Appointment;