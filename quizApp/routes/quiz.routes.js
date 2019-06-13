const express = require('express');
const router = express.Router();
const quizAPI = require('../models/quiz.models')
let pool = require('../connections.js')

router.get('/getQuizById/:token', (req, res)=>{
    quizAPI.getQuiz(req, res, req.params.token);
})
router.post('/postQuiz', (req, res)=>{
    quizAPI.postQuiz(req, res);
})
router.get('/getScoresAdmin/:token', (req, res)=>{
    quizAPI.getScoresAdmin(req, res, req.params.token);
})
router.post('/getScore', (req, res)=>{
    quizAPI.getScore(req, res);
})

router.get('/getQuizzesByAdmin/:admin', (req,res)=>{
    quizAPI.getQuizzesByAdmin(req, res, req.params.admin);
})
// router.get('/getStudentsByQuizID/:id', (req, res)=>{
//     quizAPI.getStudentsByQuizId(req, res);
// })
module.exports = router;