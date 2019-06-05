import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  constructor() { }
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




















  ngOnInit() {
  }

}
