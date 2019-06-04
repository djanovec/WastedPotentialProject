const pool = require("../connections").pool;

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Quiz = new Schema({
  id: ObjectId,
  hash: String,
  title: String,
  description: String,
  instructions: String,
  questions: [
      {
          type: String,
          prompt: String,
          choices: [],
          correct: any
      }
  ]
});

function createQuiz(req, res, id){

}

module.exports.createQuiz = createQuiz;