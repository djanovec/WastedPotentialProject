const express = require('express');
const router = express.Router();
const quizAPI = require('../models/quiz.models')

router.get('/getQuiz', (req, res)=>{
    quizAPI.getQuiz(req, res);
})
router.post('/postQuiz', (req, res)=>{
    quizAPI.postQuiz(req, res);
})
router.get('/getQuizResults', (req, res)=>{
    quizAPI.getQuizResults(req, res);
})
router.post('/postAnswers', (req, res)=>{
    quizAPI.postAnswers(req, res);
})
router.get('/getResults', (req, res) => {
    quizAPI.getResults(req, res);
})
module.exports = router;