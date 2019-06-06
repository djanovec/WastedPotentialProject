const mongoose = require('mongoose');
const Quizzes = require('../schema/Quizzes');
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

module.exports.getQuiz = getQuiz;
module.exports.postQuiz = postQuiz;