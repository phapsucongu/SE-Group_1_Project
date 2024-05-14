const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    fullname: {
        type: String,
        default: 'user'
    },
    email: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: 'male'
    },
    phone: {
        type: String,
        default: ''
    },
    experience: {
        type: String,
        default: ''
    },
    education: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    speciality: {
        type: String,
        default: ''
    },
});

const Expert = mongoose.model('experts', ExpertSchema);
module.exports = Expert;