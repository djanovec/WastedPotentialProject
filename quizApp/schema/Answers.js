const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    quizzes_id: {
        type: String
    },
    user_id: {
        type: String
    },
    answers: {
        type: Array
    }
});

module.exports = mongoose.model('Answers', answerSchema);