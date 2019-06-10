import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';
import {FormControl, FormGroup, ControlValueAccessor} from '@angular/forms';
import { MatRadioChange, MatRadioButton } from '@angular/material';

// Object Interface
export interface Quiz {
title: string;
description: string;
questions: [
  {prompt: string,
  choices: [string, string, string, string],
  answer: string},
  {prompt: string,
    choices: [string, string, string, string],
    answer: string},
  {prompt: string,
    choices: [string, string, string, string],
    answer: string} ];
}
// export interface ControlValueAccessor {
//   writeValue(obj: any): void
//   registerOnChange(fn: any): void
//   registerOnTouched(fn: any): void
//   setDisabledState(isDisabled: boolean)?: void
// }

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})


export class DisplayQuizComponent implements OnInit {
  formControl = new FormControl('');
  x = 0;
  selectedRB: MatRadioButton;
  selectedRadio: string;
userAnswers: any[] = [];

  // @ViewChild('selected') 
  // selectedRadio: MatRadioButton;

  constructor(private questionsService: GetQuestionsService) { }

  // hard coded json for testing
quiz: Quiz = {
    title: 'HTML Quiz',
    description: 'This is a quiz here',
    questions: [
      {
      prompt: 'What does HTML Stand for?',
      choices: ['yes this is a choice', 'no this is not a choice', 'maybe this a choice', 'unknown choice'],
      answer: 'yes'
    },
    {
      prompt: '2 What does HTML Stand for?',
      choices: ['2 yes', '2 no', '2 maybe', '2 unknown'],
      answer: '2 yes'
    },
    {
      prompt: '3 What does HTML Stand for?',
      choices: ['3 yes', '3 no', '3 maybe', '3 unknown'],
      answer: '3 yes'
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
 // function that activates on click of "next button." Changes the question.
nextQuestion() {
  this.userAnswers.push(this.selectedRadio);
  console.log(this.userAnswers);
      this.x = this.x + 1;
      this.currentQuestion = this.quiz.questions[this.x].prompt;
      this.currentChoices = this.quiz.questions[this.x].choices;
    }

   
}
