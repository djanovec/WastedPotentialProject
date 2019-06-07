const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);