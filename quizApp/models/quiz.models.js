const mongoose = require('mongoose');
const Quizzes = require('../schema/Quizzes');


async function getQuiz(req, res){
    try{
        const getRes = await Quizzes.find();
        console.log(getRes);
        res.status(201).send(getRes);
    }catch(err){
        console.log('Error:' + '' + err);
    }
}
async function postQuiz(req, res){
    try{
        const postReq = new Quizzes({
            hash: 'abc123',
            title: 'Super Cool Quiz',
            description: 'A quiz thats cool',
            instructions: 'take the damn quiz',
            questions: ['this is a question', 'also a question', 'oh look another question'],
        })
        var postRes = await postReq.save();
        console.log(postRes);
        res.status(201).send('Added quiz')
    } catch(err){
        console.log('Error:' + ' ' + err);
    }

}

async function getQuizResults(req, res){
    try{
        const getRes = await Quizzes.find();
        console.log(getRes);
    }
    catch(err){
        console.log('Error:' + '' + err);
    }
}

function getQuizAnswers(){
    var score = 0;
    var percentCorrect;
    // TODO : Need to be updated to an array provide by user. A set of sample answers are hard coded below.
    var quizAnswers = [2,2]
    const quiz = await Quizzes.find({}).questions;

    for (i = 0; i < quiz.questions.length[i]; i++){
        if (quiz.questions[i] == quizAnswers[i]){
            score ++;
        }
    }
    percentCorrect = (score / quizAnswers.length) * 100;
    console.log(score, percentCorrect);
    return percentCorrect;
}

module.exports.getQuiz = getQuiz;
module.exports.postQuiz = postQuiz;
module.exports.getQuizAnswers = getQuizAnswers;