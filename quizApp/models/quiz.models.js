const pool = require("../connections")
const bcrypt = require('bcrypt');
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
function getQuiz(req, res, token) {
    pool.query('SELECT questions, title, description, instructions FROM quizzes WHERE quizzes.token = $1', [token], (err, result) => {
        if (result) {
            quizInfo = result.rows[0];
            res.status(201).send(quizInfo)
        } else if (err) {
            console.log("ERROR: " + err);
            res.send({error: err});
        }
    })
}
async function getScore(req, res) {
    try {
        userAnswers = req.body.answers;
        userId = req.body.userId;
        quizId = req.body.token
        datestamp = new Date();
        score = 0;
        await pool.query('SELECT quizzes.questions FROM quizzes where quizzes.token = $1', [quizId], (err, result) => {
            if (err) {
                res.send({error: err})
            } else {
                for (var i = 0; i < userAnswers.length; i++) {
                    let correctAnswers = result.rows[0].questions[i].correct;
                    if (userAnswers[i] == correctAnswers) {
                        score++;
                    }
                }
                pool.query('INSERT INTO "userAnswers" (answers, "userId", "quizId", datestamp, score) VALUES($1, $2, $3, $4, $5)', [userAnswers, userId, quizId, datestamp, score], (err, postRes) => {
                    if(postRes){
                        postRes['score'] = score
                        res.status(201).send(postRes);
                    } else {
                        res.send({error: err})
                    }
                })
            }
        })
    } catch (err) {
        res.send({error: err})
    }
}
function postQuiz(req, res) {
    title = req.body.title;
    rndNum = Math.floor(Math.random() * 10000000).toString();
    token = bcrypt.hashSync(rndNum, 5);
    description = req.body.description;
    instructions = req.body.instructions;
    creatorId = req.body.creatorId;
    questions = JSON.stringify(req.body.questions);
    pool.query('INSERT INTO "quizzes" (title, description, instructions, "creatorId", questions, token) VALUES($1, $2, $3, $4, $5, $6)', [title, description, instructions, creatorId, questions, token], (err, result) => {
        if(err){
            res.send({error: err})
        } else {
        result['token'] = token;
        res.status(201).send(result);
        }
    })
}
function getScoresAdmin(req,res,quizId){
    pool.query('SELECT score, "userId" FROM "userAnswers" WHERE "quizId" = $1', [quizId], (err, result)=>{
        if(err){
            res.send({error: err})
        } else{
            pool.query('SELECT token FROM quizzes where id = $1', [quizId], (err, token)=>{
                result['token'] = token.rows[0].token;
                res.status(201).send(result)
            })
        }
    })
}

function getQuizzesByAdmin(req,res,admin){
    pool.query('SELECT title, id FROM quizzes WHERE "creatorId" = $1', [admin], (err, result)=>{
        if(err){
            res.send({error: err});
        }
        else {
            res.status(201).send(result);
        }
    })
}


module.exports.getScoresAdmin = getScoresAdmin;
module.exports.postQuiz = postQuiz;
module.exports.getScore = getScore;
module.exports.getQuiz = getQuiz;
module.exports.getQuizzesByAdmin = getQuizzesByAdmin
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
// async function getScore(req, res) {
//     userAnswers = req.body.answers;
//     userId = req.body.userId;
//     quizId = req.body.quizId;
//     var scoreId;
//     // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     // var dateTime = date+' '+time;
//     datestamp = new Date();
//     score = 0;
//     try {
//         await pool.query('INSERT INTO "userAnswers" (answers, "userId", "quizId", datestamp) VALUES($1, $2, $3, $4) RETURNING id', [userAnswers, userId, quizId, datestamp], (err, postRes) => {
//             if (err) {
//                 console.log('Error1: ' + err);
//             } else {
//                 scoreId = postRes.rows[0].id;
//                 console.log(scoreId);
//                 pool.query('SELECT quizzes.questions FROM quizzes where quizzes.id = $1', [quizId], (err, result) => {
//                     if (err) {
//                         console.log('Error2: ' + err);
//                     } else {
//                         for (var i = 0; i < userAnswers.length; i++) {
//                             let correctAnswers = result.rows[0].questions[i].correct;
//                             if (userAnswers[i] == correctAnswers) {
//                                 score++;
//                             }
//                         }
//                         pool.query('INSERT INTO "userAnswers" (score) VALUES($1) where id = $2', [score, scoreId], (err, scoreRes) => {
//                             if (err) {
//                                 console.log('Error3: ' + err);
//                             } else {
//                                 res.send(score.toString());
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     } catch (err) {
//         console.log('Error4: ' + err);
//     }
// }