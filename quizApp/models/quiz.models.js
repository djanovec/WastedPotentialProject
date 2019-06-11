const pool = require("../connections")
// 01110111 01101000 01100001 01110100 00100000 01100001 00100000 01110111 01100001 01110011 01110100 01100101 00100000 01101111 01100110 00100000 01110100 01101001 01101101 01100101
// for future cohorts, change this to pseudo tables from a json object column okay ty 
// Possible solution for getQuiz function
// select
//     json_build_object(
//         json_agg(
//             json_build_object(
//                 ‘title’, quiz.title,
//                 ‘description’, quiz.description
//             )
//         ) quizzes
//     )
// from quiz
// left join (
//     select
//         json_agg(
//             json_build_object(
//                 ‘prompt’, question.prompt
//             )
//         ) questions
//     from question q
//     left join (
//     select
//         json_agg(
//             json_build_object(
//                 ‘answer’, a.answer
//             )           
//         ) answers
//     from answer a
//     ) a on a.questionId = q.id
// ) q on q.quizId = quiz.Id;
function getQuiz(req, res) {
    pool.query('SELECT quizzes.questions FROM quizzes WHERE quizzes.token = $1', [req.body.token], (err, result) => {
        if (result) {
            res.status(201).send(result)
        } else if (err) {
            console.log("ERROR: " + err);
        }
    })
}
async function getScore(req, res){
    userAnswers = req.body.answers;
    score = 0;
    try{
        await pool.query('INSERT INTO "userAnswers" (answers) VALUES($1)', [userAnswers], (err, postRes)=>{
            if(err){
                console.log('Error1: ' + err);
            }
        })
        await pool.query('SELECT quizzes.questions FROM quizzes where quizzes.token = $1', [req.body.token], (err, result) => {
            if(err){
                console.log('Error2: ' + err);
            } else {
                for (var i = 0; i < userAnswers.length; i++) {
                    let correctAnswers = result.rows[0].questions[i].correct;
                    if (userAnswers[i] == correctAnswers) {
                        score++;
                    }
                }
                pool.query('INSERT INTO "userAnswers" (score) VALUES($1)', [score], (err, scoreRes) => {
                    if (err) {
                        console.log('Error3: ' + err);
                    } else {
                        res.send(score.toString());
                    }
                })
            }
        })
    }catch(err){
        console.log('Error4: ' + err);
    }
}
// function getScore(req, res) {
//     userAnswers = req.body.answers;
//     score = 0;
//     pool.query('INSERT INTO userAnswers (answers) VALUES($1)', [req.body.answers], (err, postRes) => {
//     }).then(()=>{
//         pool.query('SELECT quizzes.questions FROM quizzes where quizzes.token = $1', [req.body.token], (err, result) => {
//         }).then(()=>{
//             for(let i = 0; i < userAnswers.length; i++){
//                 if(this.userAnswers[i] == result[i].questions.correct){
//                     this.score++;
//                 }
//             }
//             pool.query('INSERT INTO userAnswers (score) VALUES($1)', [score], (err, scoreRes)=>{
//                 if(err){
//                     console.log('Error: ' + err);
//                 } else if(scoreRes){
//                     res.status(201).send(score);
//                 }
//             })

//         })
//     }) 
// }

module.exports.getScore = getScore;
module.exports.getQuiz = getQuiz;