import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GetQuestionsService } from 'src/app/get-questions.service';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton } from '@angular/material';
import { QuizServiceService } from '../quiz-service.service';

// Object Interface for data
export interface Quiz {
  title: string;
  description: string;
  questions: [
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
    },
    {
      prompt: string,
      choices: [string, string, string, string],
      correct: string
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
  quiz: any = {
    title: 'HTML Quiz',
    description: 'This is a quiz here',
    questions: [
      {
        prompt: 'What does HTML Stand for?',
        choices: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Make Text Made Language'],
        correct: 'Hyper Text Markup Language'
      },
      {
        prompt: 'Which character is used to indicate an end tag?',
        choices: ['/', '^', '*', '<'],
        correct: '/'
      },
      {
        prompt: 'How can you make a numbered list?',
        choices: ['<ul>', '<list>', '<nl>', '<ol>'],
        correct: '<ol>'
      }
    ]
};

  constructor(private questionsService: GetQuestionsService, private quizService: QuizServiceService) { 
    
  }




  // isolating the page question

  currentQuestion = this.quiz.questions[this.x].prompt;

  // insolating the page choices
  currentChoices = this.quiz.questions[this.x].choices;

  correctAnswer = this.quiz.questions[this.x].correct;

  ngOnInit() {
    this.quizService.quiz.subscribe(quiz=>this.quiz=quiz);
  }

  // identifying which radio button is selected
  onSelectionChange(currentChoice) {
    this.selectedRadio = currentChoice;
    console.log(this.selectedRadio);
  }

  unhideSubmitButton() {
    document.getElementById('searchsubmit').id = 'visible';

  }

  unhidePreviousButton() {
    document.getElementById('previousB').id = 'visible2';
  }

  hidePreviousButton() {
    document.getElementById('previousB').id = 'hidden2';
  }

  hideNextButton() {
    document.getElementById('nextBt').id = 'hidden';
  }

  // function that activates on click of "next button." Changes the question.
  nextQuestion() {
    this.userAnswers.push(this.selectedRadio);
    console.log(this.userAnswers);
    this.x = this.x + 1;
    if (this.x < this.quiz.questions.length) {
      this.currentQuestion = this.quiz.questions[this.x].prompt;
      this.currentChoices = this.quiz.questions[this.x].choices;
      this.correctAnswer = this.quiz.questions[this.x].correct;
    }
    if (this.x === 1) {
      this.unhidePreviousButton();
    }
    if (this.x === this.quiz.questions.length) {
      this.unhideSubmitButton();
    }
  }


  // previous button
  previousQuestion() {
    this.userAnswers.pop();
    console.log(this.userAnswers);
    this.x = this.userAnswers.length;
    this.currentQuestion = this.quiz.questions[this.x].prompt;
    this.currentChoices = this.quiz.questions[this.x].choices;
    this.correctAnswer = this.quiz.questions[this.x].correct;
  }

  submitButton() {
    const questionArea = document.getElementsByClassName('questionContainer')[0];
    questionArea.remove();
    document.getElementById('thankYou').id = 'visible';
    for (let z = 0; z < this.userAnswers.length; z++) {
      const correctAnswer = document.getElementById('hidden2').id = 'visible';
    }
  }

  onButtonChange() {
    if (this.currentQuestion.length === this.currentQuestion.length ) {
      this.hideNextButton();
    }
    if (this.currentQuestion.length === 0 ) {
      this.hidePreviousButton();
    }
  }
}
