import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { QuizServiceService} from '../services/quiz-service.service';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatRadioChange, MatButton } from '@angular/material';

// Object Interface for data
export interface Quiz {
  title?: string;
  description?: string;
  questions?: [
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


export interface QuizJSON {
    questions: [
        {
            prompt: string,
            choices: [
               string, string, string, string
            ],
            correct: string
        },
        {
          prompt: string,
          choices: [
             string, string, string, string
          ],
          correct: string
      },
      {
        prompt: string,
        choices: [
           string, string, string, string
        ],
        correct: string
    }];
    title: string,
    description: string,
    instructions: string,
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
 token: string = '1234';
testQuiz: QuizJSON;

  constructor(private questionService: QuizServiceService) { }



  // hard coded json for testing
  quiz: Quiz = {
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


  // isolating the page question

  currentQuestion = this.quiz.questions[this.x].prompt;

  // insolating the page choices
  currentChoices = this.quiz.questions[this.x].choices;

  ngOnInit() {
    this.questionService.getQuizByToken().subscribe( res => {
      console.log(res);
      // this.testQuiz = res['questions'];
      // console.log(this.testQuiz);
      // this.testQuiz = {question.res;
      // console.log(this.testQuiz);
      // console.log(this.testQuiz.questions)
     });


  }
  correctAnswer = this.quiz.questions[this.x].correct;

  // ngOnInit() { }

  // identifying which radio button is selected
  onSelectionChange(currentChoice) {
    this.selectedRadio = currentChoice;
    console.log(this.selectedRadio);
  }

  unhideSubmitButton() {
    document.getElementById('searchsubmit').id = 'visible';

  }

  // unhidePreviousButton() {
  //   document.getElementById('previousB').id = 'visible2';
  //   var executed = false;
  //   return function () {
  //     if (!executed) {
  //       executed = true;
  //     }
  //   };

  // }





  // function that activates on click of "next button." Changes the question.
  nextQuestion() {
    // this.unhidePreviousButton();
    this.userAnswers.push(this.selectedRadio);
    console.log(this.userAnswers);
    this.x = this.x + 1;

    if (this.x < this.quiz.questions.length) {
      this.currentQuestion = this.quiz.questions[this.x].prompt;
      this.currentChoices = this.quiz.questions[this.x].choices;
      this.correctAnswer = this.quiz.questions[this.x].correct;
    }
    else {
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
}
