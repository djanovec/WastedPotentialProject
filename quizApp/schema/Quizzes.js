const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    __id: {
        type: Number
    },
    hash: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    instructions: {
        type: String
    },
    questions: {
        type: Array
    }
});

module.exports = mongoose.model('Quizzes', quizSchema);