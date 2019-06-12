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
router.get('/getScoresAdmin', (req, res)=>{
    quizAPI.getScoresAdmin(req, res);
})
router.post('/getScore', (req, res)=>{
    quizAPI.getScore(req, res);
})

// router.get('/getStudentsByQuizID/:id', (req, res)=>{
//     quizAPI.getStudentsByQuizId(req, res);
// })
module.exports = router;