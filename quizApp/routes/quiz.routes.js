const express = require('express');
const router = express.Router();
const quizAPI = require('../models/quiz.models')

router.get('/getQuiz', (req, res)=>{
    quizAPI.getQuiz();
})
router.post('/postQuiz', (req, res)=>{
    quizAPI.postQuiz();
})
router.get('/getQuizResults'), (req, res)=>{
    quizAPI.getQuizResults();
}

module.exports = router;