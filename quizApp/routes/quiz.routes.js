const express = require('express');
const router = express.Router();
const quizAPI = require('../models/quiz.models')
let pool = require('../connections.js')

router.get('/getQuizById', (req, res)=>{
    quizAPI.getQuiz(req, res);
})
router.post('/postQuiz', (req, res)=>{
    quizAPI.postQuiz(req, res);
})
router.get('/getQuizResultsByQuizId', (req, res)=>{
    quizAPI.getQuizResults(req, res);
})
router.post('/postAnswersByQuizId', (req, res)=>{
    quizAPI.postAnswers(req, res);
})
router.get('/getAllUserScoresByQuizId', (req, res) => {
    quizAPI.getResults(req, res);
})
// router.get('/getStudentsByQuizID/:id', (req, res)=>{
//     quizAPI.getStudentsByQuizId(req, res);
// })
module.exports = router;