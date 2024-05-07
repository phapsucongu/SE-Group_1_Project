const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'pending'
    },
});
export default AppointmentSchema;