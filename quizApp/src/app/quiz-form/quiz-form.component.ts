import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm, FormArray } from '@angular/forms';
import { QuizServiceService, Quiz, Questions } from '../services/quiz-service.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {
  quizTitle;
  quizDescription;
  quizInstructions;
  quizQuestions;
  correctAnswers;

  public myForm: FormGroup;

  constructor(private quizService: QuizServiceService, private _fb: FormBuilder) { }

  save(thing){
    console.log(thing);
  }
  questions: Array<Object> = [
    {
      type: "multi",
      prompt: "",
      choices: [],
      correct: "",

    }
  ]

  types: string[] = ["multi"]

  title = ""
  description = ""
  instructions = ""

indexTracker(index, value){
return index;
}

  removeQuestion(idx) {
    this.questions.splice(idx, 1)
  }

  addQuestion() {
    this.questions.push({
      type: "multi",
      prompt: "",
      choices: [],
      correct: "",

    })
  }

  removeChoice(question, cidx) {
    console.log(cidx);
   question['choices'].splice(cidx, 1);
   console.log(this.questions);
  }

  addChoice(val, choice) {
    console.log(this.questions[val]);
    this.questions[val]['choices'].push('');

  }

  trackByFn(index, item){
    return index;
  }

  quizFormSubmit() {
    let quiz: any = {
      title: this.quizTitle,
      description: this.quizDescription,
      instrutions: this.quizInstructions,
      questions: this.quizQuestions,
      creatorId: 1,
    }
    console.log(quiz);

    // if(this.quizForm.valid){
    this.quizService.postQuiz(quiz).subscribe(res => {
      console.log(res)
    });

    // }

  }

  ngOnInit() {

  }
}
