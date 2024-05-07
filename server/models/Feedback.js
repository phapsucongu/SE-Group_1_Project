const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    content: {
        type: String,
        default: ''
    },
    rate: {
        type: int,
        default: 0
    },
});
