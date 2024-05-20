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
        default: 'expert'
    },
    fullname: {
        type: String,
        default: 'Name'
    },
    email: {
        type: String,
        default: 'email@gmail.com'
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
    bio: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    speciality: {
        type: String,
        enum : [
            "Civil Rights Law",
            "Corporate Law",
            "Criminal Law",
        ],
    },
    price :
    {
        type: Number,
        default: 100,
    }
});

const Expert = mongoose.model('experts', ExpertSchema);
module.exports = Expert;