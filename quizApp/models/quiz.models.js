const mongoose = require('mongoose');
const Quizzes = require('../schema/Quizzes');
const Answers = require('../schema/Answers');

// 01110111 01101000 01100001 01110100 00100000 01100001 00100000 01110111 01100001 01110011 01110100 01100101 00100000 01101111 01100110 00100000 01110100 01101001 01101101 01100101
async function getQuiz(req, res){
    try{
        const getRes = await Quizzes.find();
        console.log(getRes); 
        res.status(201).send(getRes);
    }catch(err){
        console.log('Error:' + ' ' + err);
    }
}
async function postQuiz(req, res) {
    try {
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
    } catch (err) {
        console.log('Error:' + ' ' + err);
    }
}

async function postAnswers(req, res) {
    try {
        var quizId
        const postAnswers = new Answers({
            _id: 'abc456',
            quizzes_id: 'abc123',
            user_id: 'user1',
            UserAnswers: [2,2],
            quizId = quizzes_id
        });
        var postRes = await postAnswers.save();
        console.log(getRes);
        res.status(201).send('Added Answers')

        // Fuction fires after answers have been posted
        console.log(quizId);
        getQuizAnswers()

    }
    catch (err) {
        console.log('Error:' + '' + err);
    }
}

async function getResults(){
    try {
        var query  = Quizzes.where({ _id: req.body.quizId });
        await query.findOne(function (err, quiz) {
        if (err) return handleError(err)
        if (quiz) {
        var answers  = Answers.where({ quizzes_id: req.body.quizId });
        await answers.findOne(function (err, answer){
            if (err) return handleError(err);
            if (answer) {
                answer['quizResults'] = quiz
                return res.status(201).send(answer) 
            } 
        })
    }
});
    } catch (err) {
        console.log('Error:' + '' + err);
    }
}


module.exports.getQuiz = getQuiz;
module.exports.postQuiz = postQuiz;
module.exports.getQuizAnswers = getQuizAnswers;
module.exports.postAnswers = postAnswers;
module.exports.getResults = getResults;
/* Model for the anwsers schema
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

var query  = Quizzes.where({ _id: req.body.quizId });
query.findOne(function (err, quiz) {
  if (err) return handleError(err);
  if (quiz) {
    // doc may be null if no document matched
  }
});
*/