import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';



export interface Quiz {
title: string;
description: string;
questions: [
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
    }]
    };

    //isolating the questions
    quizQuestions: Quiz['questions'] = this.quiz.questions;
//insolating the page question
currentChoices = this.quiz.questions[0].choices;


    ngOnInit() {

 this.quizQuestions.forEach(res => {
      console.log(res);
      
});
 }
displayQuestions() {
    this.questionsService.getQuestion().subscribe(res => {
      let results = res;
    })
  }
}