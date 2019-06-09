import { Component, OnInit, Input } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';
import {FormControl} from '@angular/forms';


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


@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {
  name = new FormControl('')
  x = 0;
  constructor(private questionsService: GetQuestionsService) { }

  //hard coded json for testing
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

// observing the changing x value
// scope.$watch('x', function(newValue, oldValue) {
//   console.log(newValue);
//   scope.someVar = [Do something with someVar];
// });

// const questionObservable = (this.x);
// const questionObserverObject = { next: x => console.log('Observer got a next value: ' + x)};
// questionObservable.subscribe(currentChoices);
    ngOnInit() {
 }

 // function that activates on click of "next button." Changes the question.
nextQuestion() {
      this.x = this.x + 1;
      this.currentQuestion = this.quiz.questions[this.x].prompt;
      this.currentChoices = this.quiz.questions[this.x].choices;
}

}
