import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import {QuizServiceService} from '../services/quiz-service.service';
import { Quiz } from './Models/quiz.model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
    quiz: Quiz = {
    quizTitle: "",
    quizDescription: "",
    quizInstructions: "",
    quizQuestions: "",
    correctAnswers: "",
   

     }

     valueList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  constructor(private quizService: QuizServiceService ) { }

questions: Array<Object> = [
  {
    type: "multi",
    prompt: "",
    choices: [""],
    correct: "",

  }
]

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
   quizFormSubmit(){
    // if(this.quizForm.valid){
    this.quizService['this.quiz'].subscribe(res => console.log(res))
  // }

}

ngOnInit() {

}
}
