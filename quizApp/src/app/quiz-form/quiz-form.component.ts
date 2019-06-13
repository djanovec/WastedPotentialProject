import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { QuizServiceService } from '../quiz-service.service';
import { Quiz } from './Models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  constructor(private quizService: QuizServiceService ) { }
questions: Array<Object> = [
  {
    type: "multi",
    prompt: "",
    choices: [""],
    correct: "",

  }
]
quiz: Quiz = {
  quizTitle: "",
  quizDescription: "",
  quizInstructions: "",
  quizQuestions: this.questions,
  correctAnswers: "",

   }
types: string [] = ["multi"]

 title = ""
 description = ""
 instructions = ""

 removeQuestion(val){
   this.questions.splice(this.questions.indexOf(val),1)
 }

 addQuestion(){
   this.questions.push({
    type: "multi",
    prompt: "",
    choices: [""],
    correct: "",

  })
 }

 removeChoice(val,arr){
   let x = this.questions[this.questions.indexOf(arr)];
   x[`choices`].splice(x[`choices`].indexOf(val),1)
 }

 addChoice(val){
   let x = this.questions[this.questions.indexOf(val)]
   x['choices'].push("")

 }
//    quizFormSubmit(quiz){
//     // if(this.quizForm.valid){
//     this.quizService.postQuiz(quiz).subscribe(res => console.log(res))
//   // }

// }

quizFormSubmit(quiz) {
  console.log(this.quiz);
  this.quizService.postQuiz(quiz).subscribe(res =>
    console.log(res)
  

  );
  // }

}

ngOnInit() {

}
}
