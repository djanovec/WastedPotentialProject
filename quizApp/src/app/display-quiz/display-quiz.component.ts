import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton} from '@angular/material';

// Object Interface for data
export interface Quiz {
  title: string;
  description: string;
  questions: [
    {
      prompt: string,
      choices: [string, string, string, string],
      answer: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      answer: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      answer: string
    }];
}

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})


export class DisplayQuizComponent implements OnInit {
  formControl = new FormControl('');
  x = 0;
  matButton: MatButton;
  selectedRadio: string;
  userAnswers: any[] = [];

  constructor(private questionsService: GetQuestionsService) { }

  // hard coded json for testing
  quiz: Quiz = {
    title: 'HTML Quiz',
    description: 'This is a quiz here',
    questions: [
      {
        prompt: 'What does HTML Stand for?',
        choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Make Text Made Language'],
        answer: 'Hyper Text Markup Language'
      },
      {
        prompt: 'Which character is used to indicate an end tag?',
        choices: ['/', '^', '*', '<'],
        answer: '/'
      },
      {
        prompt: 'How can you make a numbered list?',
        choices: ['<ul>', '<list>', '<nl>', '<ol>'],
        answer: '<ol>'
      }
    ]
  };


  // isolating the page question

  currentQuestion = this.quiz.questions[this.x].prompt;

  // insolating the page choices
  currentChoices = this.quiz.questions[this.x].choices;

  ngOnInit() {
  }
  // identifying which radio button is selected
  onSelectionChange(currentChoice) {
    this.selectedRadio = currentChoice;
    console.log(this.selectedRadio);

  }

  createSubmitButton() {
    const btn = document.createElement('BUTTON');
    btn.innerHTML = 'submit';
    document.body.appendChild(btn);

  }

  // function that activates on click of "next button." Changes the question.
  nextQuestion() {
    this.userAnswers.push(this.selectedRadio);
    console.log(this.userAnswers);
    this.x = this.x + 1;
    if ( this.x < this.quiz.questions.length){
    this.currentQuestion = this.quiz.questions[this.x].prompt;
    this.currentChoices = this.quiz.questions[this.x].choices;
  }
  else {
  this.createSubmitButton();
    }
  }
}


