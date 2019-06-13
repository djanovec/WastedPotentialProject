import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { QuizServiceService, Quiz, Questions } from '../services/quiz-service.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  constructor(private quizService: QuizServiceService) { }
  public quiz: Quiz = {
    title: '',
    description: '',
    instructions: '',
    questions: [{}]
  };
  questions: Questions[] =[
    {
      type: "multi",
      prompt: "",
      choices: [""],
      correct: "",

    }];

  removeQuestion(val) {
    this.quiz.questions.splice(this.quiz.questions.indexOf(val), 1);
  }

  addQuestion() {
    this.quiz.questions.push({
      type: "multi",
      prompt: "",
      choices: [""],
      correct: "",

    });
  }

  // addChoice(i) {
  //   this.questions[i].choices.push;
  //   // this.quiz.questions

  // }

  // addChoice(nextChoice) {
  //   let x = this.quiz.questions.indexOf(nextChoice);
  //   this.quiz.questions['this.quiz.questions[].choices'].push(i);
  //   console.log(this.quiz.questions);
  //   // this.quiz.questions

  // }
  removeChoice(val, arr) {
    let x = this.quiz.questions.indexOf(arr);
    this.quiz.questions['this.quiz.questions'].choices.splice(x).indexOf(val, 1);
  }

 

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
