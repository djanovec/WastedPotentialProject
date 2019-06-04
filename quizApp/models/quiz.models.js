const mongoose = require('mongoose');
const Quizzes = require('../schema/Quizzes');


async function getQuiz(req, res){
    try{
        const getRes = await Quizzes.find();
        console.log(getRes);
    }catch(err){
        console.log('Error:' + '' + err);
    }
}
async function postQuiz(req, res){
        const postReq = new Quizzes({
            hash: 'abc123',
            title: 'Super Cool Quiz',
            description: 'A quiz thats cool',
            instructions: 'take the damn quiz',
            questions: ['this is a question', 'also a question', 'oh look another question'],
        })
        var postRes = await postReq.save();
        console.log(postRes);

}

module.exports.getQuiz = getQuiz;
module.exports.postQuiz = postQuiz;