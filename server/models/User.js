const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
