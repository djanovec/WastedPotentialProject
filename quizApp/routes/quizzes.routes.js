const express = require("express");
let router = express.Router();
let quiz = require("../models/quizzes.model");

router.post("/create", (req, res)=>{
    quiz.createQuiz(req, res);
});

quiz.path('name').set(capitalize);

module.exports = router;